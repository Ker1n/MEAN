import {Injectable} from "@angular/core";
import {User} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {URL} from "../config";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;

  constructor(private http: HttpClient) {
  }


  login(user: User): Observable<{token:string}> {
    return this.http.post<{token:string}>(`${URL}/api/auth/login`, user)
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('auth-token', token);
            this.setToken(token);
          }
        )
      )
  };

  setToken(token: string | null) {
    this.token = token;
  }

  getToken():string | null {
    return this.token
  }
  isAuthenticated(): boolean {
    return !!this.token
  }
  logout() {
    this.setToken(null);
    localStorage.clear();
  }

  registration(user:User):Observable<User> {
    return this.http.post<any>(`${URL}/api/auth/register`, user); // todo => need create interface for response from post auth registration or check how to skip this error
  }



}

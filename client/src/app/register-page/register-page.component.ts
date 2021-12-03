import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit, OnDestroy {

  public registerForm: FormGroup;
  private aSub: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email:  new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    })
  }

  ngOnDestroy() {
    if(this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  onSubmit() {
    this.registerForm?.disable();
    this.aSub = this.auth.registration(this.registerForm?.value)
      .subscribe(
        () => {
          this.router.navigate(['/login'], {
            queryParams: {
              registered: true
            }
          }).then(r => console.warn(r));
        },
        (error) => {
          console.warn(error)
          this.registerForm?.enable();
        }
      )
  }
}

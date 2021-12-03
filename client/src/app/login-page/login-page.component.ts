import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  public loginForm!: FormGroup;
  private  aSub: Subscription ;
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
    ) {}


  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    });

    this.route.queryParams.subscribe((params:Params) => {
      if (params['registered']) {
        // You can enter in the system
      } else if (params['accessDenied']) {
        // You need to make authorization
      }
    })
  }

  onSubmit() {
    this.loginForm.disable();

    this.aSub = this.auth.login(this.loginForm.value).subscribe(
      () => {
        this.router.navigate(['/']).then(r => console.log(r)) //'/overview
      },
      (error) => {
        this.loginForm.enable()
      }
    )
  }
  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

}

import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { AppService } from '../../utils/services/app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public isAuthLoading = false;
  constructor(
    private renderer: Renderer2,
    private toastr: ToastrService,
    private appService: AppService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.renderer.addClass(document.querySelector('app-root'), 'login-page');
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  login() {
    if (this.loginForm.valid) {
      if(this.loginForm.get('email').value=="akash@gmail.com" && this.loginForm.get('password').value=="11111"){
        this.toastr.success('Login Successful','',{timeOut:1500});
        localStorage.setItem('accessToken','value');
        this.router.navigate(['/admin']);

      }else{
        this.toastr.error('Wrong credentials','',{timeOut:1500});

      }
     // this.appService.login();
    } else {
      this.toastr.error('Enter valid username/password','',{timeOut:1500});
    }
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
  }
}

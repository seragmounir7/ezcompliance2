import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { AppService } from '../../utils/services/app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from '../../utils/services/auth.service'

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
    private AuthService: AuthService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
    this.renderer.addClass(document.querySelector('app-root'), 'login-page');
  }

  login() {

    if (this.loginForm.invalid) {
      return;
    }
    const data = {
      ...this.loginForm.value,
    };
    console.log("data",data)
    if (this.loginForm.valid) {
      this.AuthService.login(data).subscribe((resData: any) =>{
        console.log("resData",resData);
        console.log("res",resData.status);
        if (resData.status == "SUCCESS"){
          sessionStorage.setItem('userName', resData.data.username);   
          sessionStorage.setItem('phoneNo', resData.data.phone);   
                 this.router.navigate(['/admin']);
          this.toastr.success('Login Successful', '');
        }
      },(err)=>{
        console.log(err)
        this.toastr.error('Wrong credentials', '');
      }
      )
    } else {
      this.toastr.error('Enter valid username/password', '', { timeOut: 1500 });
    }
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
  }
}

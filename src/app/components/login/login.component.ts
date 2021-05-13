import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, UrlSegment } from '@angular/router';
import { TextConstants } from 'src/app/constants/text-constants';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginConstants = TextConstants.loginConstant;
  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get signup() { return this.signupForm.controls; }

  signIn() {
    let user = this.loginService.userList.filter(x=> x.username === this.signupForm.value.username)[0];
    if(user && user.password === this.signupForm.value.password) {
      this.loginService.storeUserCredential(user);
      this.router.navigateByUrl("/home");
    }

  }

}

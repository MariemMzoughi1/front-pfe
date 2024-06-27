import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { AuthService } from '../services/auth.service';
import { CustomValidators } from '../helpers/custom.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup
  submitted = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: string='' ;
  error = '';
  status='';
  message: string='';
  id: any;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router:Router, private formBuilder: FormBuilder,public customValidators:CustomValidators){}

  ngOnInit(): void {
    
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required,Validators.email]],
        password: ['',[Validators.required]]

      }
    );
  }

  handleLogin(){
   this.submitted = true
   if (this.loginForm.invalid) {
    return;
   }
   this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
    next: data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.router.navigateByUrl('acceuil');
    },
    error: err => {
      this.errorMessage = err.error.message;
      this.error=err.error.error;
      this.status=err.error.status;
      this.isLoginFailed  = true;

    }
  })
  }
}

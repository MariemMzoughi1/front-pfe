import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../helpers/custom.helper';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form!: FormGroup;
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  error = '';
  status='';
  role: string='' ;
  constructor(private authService: AuthService,private router:Router,private fb:FormBuilder,public customValidators:CustomValidators){}
  
  ngOnInit(): void {
    this.form = this.fb.group(
      {
        username:['',[Validators.required]],
        matricule:['',[Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has upper case letter
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // check whether the entered password has a lower case letter
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            // check whether the entered password has a special character
            CustomValidators.patternValidator(
              /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              {
                hasSpecialCharacters: true
              }
            ),
            Validators.minLength(6)
          ])
        ],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: [CustomValidators.match('password', 'confirmPassword')]
      }
    )
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.form)
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value)
    this.authService.register(this.form.value.username,this.form.value.matricule,this.form.value.email, this.form.value.password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigateByUrl('/login')
        
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.error=err.error.error;
        this.status=err.error.status;
        this.isSignUpFailed = true;
        
      }
    });
  }

  SignIn(){
    this.router.navigate(['/login']);
  }
}

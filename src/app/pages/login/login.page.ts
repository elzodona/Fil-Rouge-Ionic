import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { 
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onButtonClick() {
    // console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      (response:any) => {
        console.log(response);
        if (response.user.role != 'eleve') {
          console.log('error');
          this.router.navigate(['/login']);
        }
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('token', JSON.stringify(response.token));
        this.router.navigate(['/sidebar']);
      },
      (error) => {
        console.error('Erreur de connexion :', error);
        this.router.navigate(['/login']);
      }
    );
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userPassword = '123';
  userLogin = 'admin';
  messege: string;

  constructor(public AuthService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.setMessege();
  }

  setMessege(): void {
    this.messege = `Logged ${this.AuthService.isLoggedIn === true ? 'in' : 'out'}`;
  }


  login(): void {
    this.messege = 'Try to log in...';
    this.AuthService.login(this.userLogin, this.userPassword).subscribe((res: boolean) => {
      console.log('Login result:', res);
      this.setMessege();

      if (this.AuthService.isLoggedIn) {
        const redirect = this.AuthService.redirectedUrl ? this.AuthService.redirectedUrl : '/admin';
        this.router.navigate([redirect]);

      }
    });




  }
  //Доработать этот блок
  logout(): void {
    this.AuthService.logout();

  }
}

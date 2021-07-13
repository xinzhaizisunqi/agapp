import { Component, OnInit } from '@angular/core';

import { Auth } from './auth';
import { AuthService } from './auth.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router) { }

  editHero: Auth | undefined;

  ngOnInit(): void {
  }

  login(username: string,password: string) {
 /*   const auth: Auth = { username,password } as Auth;
    this.authService.authUser(auth)
      .subscribe(result => console.log(result.username));*/
    const navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };
    const redirectUrl = '/dashboard';
    // Redirect the user
    this.router.navigate([redirectUrl], navigationExtras);
  }

}

import { Component, OnInit } from '@angular/core';

import { Auth } from './Auth';
import { AuthService } from './auth.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router) { }

  error = false;

  ngOnInit(): void {
  }

  login(username: string,password: string) {
    const auth: Auth = { username,password } as Auth;
    this.authService.authUser(auth)
      .subscribe(result => {
        if (result.code == 0) {
          const navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };
          const redirectUrl = '/dashboard';
          this.router.navigate([redirectUrl], navigationExtras);

        }else {
          this.error = true;
        }
      });

  }

}

import { Component, OnInit } from '@angular/core';
import { Auth } from '../login/Auth';
import { AuthService } from '../login/auth.service';
import { NavigationExtras, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-v2',
  templateUrl: './login-v2.component.html',
  styleUrls: ['./login-v2.component.css']
})
export class LoginV2Component implements OnInit {

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });



  constructor(private authService: AuthService, public router: Router) { }

  error = false;

  ngOnInit(): void {

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.get('username')?.value);
    let username = this.profileForm.get('username')?.value;
    let password = this.profileForm.get('password')?.value;
    this.login(username,password);
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

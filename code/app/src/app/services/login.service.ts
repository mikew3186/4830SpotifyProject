import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private cookieService: CookieService, private router: Router) {}

  checkAuthCookie(): boolean {
    // check if the auth script set this cookie
    return this.cookieService.check('access');
  }

  getAuthCookie(): string {
    return this.cookieService.get('access');
  }

  logout(): void {
    this.cookieService.delete('access');
    this.router.navigate([""]);
  }
  
}

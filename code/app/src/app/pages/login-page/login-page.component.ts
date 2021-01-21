import { Component, OnInit } from '@angular/core';

import {LoginService } from 'src/app/services/login.service';
import { CookieService } from 'ngx-cookie-service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  constructor() {

   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { IUserInfo } from 'src/app/types/IUserInfo';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  userInfo: IUserInfo;

  constructor(private data: DataService) { 
    this.data.getUserInfo(true).subscribe(response => {
      this.userInfo = response;
    });
  }

  ngOnInit(): void {
  }

}

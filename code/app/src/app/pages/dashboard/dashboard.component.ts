import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
// Services
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';
// Data Models
import { INewReleases } from 'src/app/types/INewReleases';
import { IRecentlyPlayed } from 'src/app/types/IRecentlyPlayed';
import { ITopArtists } from 'src/app/types/ITopArtists';
import { ITopTracks } from 'src/app/types/ITopTracks';
import { IUserInfo } from 'src/app/types/IUserInfo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  activeCategory: any; // will hold any data model

  userInfo: IUserInfo;
  recentlyPlayed: IRecentlyPlayed;
  topArtists: ITopArtists;
  topTracks: ITopTracks;
  newReleases: INewReleases;

  constructor(
    private data: DataService,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
    ) {

    // omit 'true' to get data from API, not local test data

    // should maybe cache all this data on arrival to the dashboard
      // lazy load it as needed?

    this.data.getUserInfo(true).subscribe(response => {
      this.userInfo = response;
    });
  }

  ngOnInit(): void {}

  /**
   * Get selection event from sidebar sub-component
   * and render in the dashboard UI
   *
   * @param e EventEmitter message passed
   */
  renderSelectedData(e: string): void {
    // navigate to the sub-route from dashboard
    this.router.navigate([`/dashboard/${e}`]);
  }
  
  logout(): void {
    this.loginService.logout();
  }

}

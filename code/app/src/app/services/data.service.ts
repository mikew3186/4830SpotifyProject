import { Injectable } from '@angular/core';
import {LoginService } from 'src/app/services/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserInfo } from '../types/IUserInfo';
import { IRecentlyPlayed } from '../types/IRecentlyPlayed';
import { ITopArtists } from '../types/ITopArtists';
import { ITopTracks } from '../types/ITopTracks';
import { INewReleases } from '../types/INewReleases';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private token: string;
  private headers: HttpHeaders;

  constructor(
    private loginService: LoginService,
    private http: HttpClient) {

    // check if the user has logged in and left auth cookie
    if (loginService.checkAuthCookie()) {
      // save the auth cookie for HTTP request use
      this.token = this.loginService.getAuthCookie();

      if (this.token !== null) {
        // set an Authorization request header for future API calls
        this.headers = new HttpHeaders().set('Authorization', this.token);
      }
    }

  }

  private fetch(path: string, hdrs?: HttpHeaders): Observable<object> {
    return (hdrs)
      ? this.http.get(path, { headers: hdrs })
      : this.http.get(path);
  }

  /**
   * Returns either local or API data for testing and production
   * @param T the custom data model the data should conform to
   * @param test a switch to tell the service to fetch local test
   * data, or real data from the API
   * @param local the path to the local test data file
   * @param global the path to the requested API endpoint
   * @returns the specified, custom data model wrapped in an observable
   */
  private delegate<T>(test: boolean, local: string, global: string): Observable<T> {
    // local dev fetch switch
    const returnable = (test === true)
      ? this.fetch(local)
      : this.fetch(global, this.headers);

    // cast into an observable that conforms to the specified data model
    return returnable as unknown as Observable<T>;
  }

  getNewReleases(test?: boolean): Observable<INewReleases> {
    const local = '../../../assets/testNewReleases.json';
    const global = '/api/newreleases';

    return this.delegate<INewReleases>(test, local, global);
  }

  getRecentlyPlayed(test?: boolean): Observable<IRecentlyPlayed> {
    const local = '../../../assets/testRecentlyPlayed.json';
    const global = '/api/recentlyplayed';

    return this.delegate<IRecentlyPlayed>(test, local, global);
  }

  getTopArtists(test?: boolean): Observable<ITopArtists> {
    const local = '../../../assets/testTopArtists.json';
    const global = '/api/topartists';

    return this.delegate<ITopArtists>(test, local, global);
  }

  getTopTracks(test?: boolean): Observable<ITopTracks> {
    const local = '../../../assets/testTopTracks.json';
    const global = '/api/toptracks';

    return this.delegate<ITopTracks>(test, local, global);
  }

  getUserInfo(test?: boolean): Observable<IUserInfo> {
    const local = '../../../assets/testUserInfo.json';
    const global = '/api/userinfo';

    return this.delegate<IUserInfo>(test, local, global);
  }

}

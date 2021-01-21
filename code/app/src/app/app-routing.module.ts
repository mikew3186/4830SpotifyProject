import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Pages
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
// Components
import { UserInfoComponent } from './components/user-info/user-info.component';
import { TopTracksComponent } from './components/top-tracks/top-tracks.component';
import { RecentlyPlayedComponent } from './components/recently-played/recently-played.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { TopArtistsComponent } from './components/top-artists/top-artists.component';
// Services
import { AuthGuard } from './guards/auth.guard';
import { DashboardGuard } from './guards/dashboard.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [DashboardGuard],

    children: [
      { path: 'new-releases', component: NewReleasesComponent },
      { path: 'recently-played', component: RecentlyPlayedComponent },
      { path: 'top-artists', component: TopArtistsComponent },
      { path: 'top-tracks', component: TopTracksComponent },
      { path: 'user-info', component: UserInfoComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

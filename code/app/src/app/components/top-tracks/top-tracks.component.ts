import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { ITopTracks } from 'src/app/types/ITopTracks';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.scss']
})
export class TopTracksComponent implements OnInit {

topTracks: ITopTracks;

  constructor(private data: DataService) { 
    this.data.getTopTracks(true).subscribe(response => {
      this.topTracks = response;
    });
  }

  ngOnInit(): void {
  }

}

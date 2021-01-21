import { Injectable } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { IRecentlyPlayed } from 'src/app/types/IRecentlyPlayed';
import { IArtist } from 'src/app/types/IArtist';
import { RadarArtists } from 'src/app/types/radar-artists';

import { DataService } from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class RadarChartModelService {

  constructor(private data: DataService) { 
    this.data.getRecentlyPlayed(true).subscribe(response => {
      this.recentlyPlayed = response;
      console.log(this.recentlyPlayed);
      this.updateData();
    });
  }
  

  recentlyPlayed: IRecentlyPlayed;

  artists: Array<IArtist> = [];

  artistList: Array<RadarArtists> = [];

  chartArtistLabels: Array<string> = [];
  chartArtistData: Array<number> = [];
  

  updateData(){
    this.getArtistsFromRecentSongs();
    this.makeArtistList();
  }

  getArtistsFromRecentSongs(){
    for(let i=0;i<this.recentlyPlayed.items.length;i++){
      for(let j=0;j<this.recentlyPlayed.items[i].track.artists.length;j++){
        this.artists.push(this.recentlyPlayed.items[i].track.artists[j]);
      }
    }
    console.log(this.artists);

  }

  makeArtistList(){
    let i = 0;
    let k = 0;
    let added = false;
    
    this.artistList.push({
      artistName: this.artists[i].name,
      occurences: 1
    });
    
    i++;
    while (i < this.artists.length){
      k = 0;
      while (k < this.artistList.length){
        
        if( this.artistList[k].artistName == this.artists[i].name ){
          this.artistList[k].occurences = this.artistList[k].occurences + 1;
          k = this.artists.length;
          added = true;

        }
        k++;
      }
      if (!added){
        this.artistList.push({
          artistName: this.artists[i].name,
          occurences: 1
        });
      }
      i++;
      added = false;
    }
    this.artistList.forEach(element =>{
      // Pushes the unique artist names into the labels array for the charts labels
      this.chartArtistLabels.push(element.artistName);
      //Pushes the counts of each artist into the data array for the charts data
      this.chartArtistData.push(element.occurences);
    })
  }

  


  getOptions(){
    return {
      responsive: true,
      scale: {
        ticks: {
            min: 0,
            stepSize: 1
        }
    }
    };
  }
  getLabels(){
    // Need to figure out how we are going to get an array of the genres from the grabbed recent songs here without repeats
    // Example [Rap, Country, Pop, Blues, Classical , Rock]
    return this.chartArtistLabels;
  }
  getData(){
    //The number value at index 0 will need to be the value for how many songs there are on the recent songs list that are of the genre at index [0]
    // For example, if there were 4 rap, 2 country, 1 pop, 2 blues , 1 Classical , 2 Rock, the data array would need to be [4,2,1,2,1,2]
   let chartData: ChartDataSets[] = [
      {
      data: this.chartArtistData, 
      label: 'Your Most Popular Artists',
      }
    ];
    return chartData;
  }
  getChartType(){
    let type: ChartType = 'radar';
    return type;
  }


}

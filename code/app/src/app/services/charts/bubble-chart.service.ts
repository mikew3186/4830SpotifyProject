import { Injectable } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import { DataService } from 'src/app/services/data.service';
import { ITopArtists } from 'src/app/types/ITopArtists';
import { BubbleArtists } from 'src/app/types/bubble-artists';

@Injectable({
  providedIn: 'root'
})
export class BubbleChartService {

  constructor(private data: DataService) { 
    this.data.getTopArtists(true).subscribe(response => {
      this.topArtistsGet = response;
      this.updateData();
    });
  }

  topArtistsGet: ITopArtists;
  
  artists: Array<BubbleArtists> = [];

  yAxisData: Array<any> = [];


  updateData(){
    this.topArtistsGet.items.forEach(item => {
      this.artists.push({
        artistName: item.name,
        followers: item.followers.total,
        images: item.images,
        popularity: item.popularity
      });
    });

    let i = 0;
    this.artists.forEach(artist => {
      this.yAxisData.push({
        x: i,
        y: artist.popularity,
        r: artist.popularity,
      })
      i++;
    });

  }


  
  getBubbleOptions(){
    let bubbleOptions: ChartOptions = {
        responsive: true,
        scales: {
          xAxes: [{
            ticks: {
              min: 0,
              max: 10,
              stepSize: 1,
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 100,
            }
          }]
        }
      };
      return bubbleOptions;
  }

  getBubbleData(){
    let bubbleChartData: ChartDataSets[] = [
      {
        data: this.yAxisData,
        label: 'Artist Popularity',
      },
    ];
    return bubbleChartData;
  }



  getLegend(){
    return true;
  }

  getChartType(){
    let type: ChartType = 'bubble';
    return type;
  }

  getArtists(){
    return this.artists;
  }
}

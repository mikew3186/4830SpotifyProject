import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { RadarChartModelService } from 'src/app/services/charts/radar-chart-model.service';
import { DataService } from 'src/app/services/data.service';
import { IRecentlyPlayed } from 'src/app/types/IRecentlyPlayed';

@Component({
  selector: 'app-recently-played',
  templateUrl: './recently-played.component.html',
  styleUrls: ['./recently-played.component.scss']
})
export class RecentlyPlayedComponent implements OnInit {
  sum;
  averageDuration;
  seconds;
  minutes;
  recentlyPlayed: IRecentlyPlayed;
  explicitPercentage;

  constructor(private radarModel: RadarChartModelService, private data: DataService) { 
    this.data.getRecentlyPlayed(true).subscribe(response =>{
      this.recentlyPlayed = response;
      this.sum = 0;

      for(let i=0;i<this.recentlyPlayed.items.length;i++){
        this.sum += this.recentlyPlayed.items[i].track.duration_ms;
      }
      
      this.averageDuration = this.sum / this.recentlyPlayed.items.length;
      this.seconds = Math.floor((this.averageDuration / 1000) % 60),
      this.minutes = Math.floor((this.averageDuration / (1000 * 60)) % 60),

      this.sum = 0;
      for(let i=0;i<this.recentlyPlayed.items.length;i++){
        if(this.recentlyPlayed.items[i].track.explicit == true){
          this.sum++;
        }
      }
      this.explicitPercentage = (this.sum / this.recentlyPlayed.items.length) * 100;
    });
  }

  ngOnInit(): void {
  }
public radarChartOptions: RadialChartOptions = this.radarModel.getOptions();
public radarChartLabels: string[] = this.radarModel.getLabels();
public radarChartData: ChartDataSets[] = this.radarModel.getData();
public radarChartType: ChartType = this.radarModel.getChartType();





}

import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import { BubbleChartService } from 'src/app/services/charts/bubble-chart.service';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.scss']
})
export class TopArtistsComponent implements OnInit {

  artistList;

  constructor(private bubbleModel: BubbleChartService) {
    this.artistList = this.bubbleModel.getArtists();
   }

  ngOnInit(): void {
  }

  public bubbleChartOptions: ChartOptions = this.bubbleModel.getBubbleOptions();

  public bubbleChartType: ChartType = this.bubbleModel.getChartType();
  public bubbleChartLegend = this.bubbleModel.getLegend();
  public bubbleChartData: ChartDataSets[] = this.bubbleModel.getBubbleData();
  




}

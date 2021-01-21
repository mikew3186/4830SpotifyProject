import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // will emit the category selection back to dashboard
  @Output() selector = new EventEmitter<string>();

  categories: { [label: string]: string } = {
    'User Info': 'user-info',
    'Recently Played': 'recently-played',
    'Top Artists': 'top-artists',
    'Top Tracks': 'top-tracks',
    'New Releases': 'new-releases'
  };


  constructor() {}

  ngOnInit(): void {
    console.log(Object.keys(this.categories));
  }

  
  selectItem(categoryRoute: string): void {
    // send the event to parent (dashboard) component
    this.selector.emit(`${categoryRoute}`);
  }

}

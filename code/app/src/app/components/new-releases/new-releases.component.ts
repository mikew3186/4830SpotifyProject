import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { INewReleases } from 'src/app/types/INewReleases';

import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.scss']
})
export class NewReleasesComponent implements OnInit {

  newReleases: INewReleases;

  constructor(private data: DataService, private fb: FormBuilder) {
    this.data.getNewReleases(true).subscribe(response => {
      this.newReleases = response;
    });
   }

   setLimitForm = this.fb.group({
    limiter: new FormControl('', [ Validators.min(1), Validators.max(10),Validators.required ]),
  });

  ngOnInit(): void {
  }

  changeLimit(){
    let x = this.setLimitForm.value.limiter;
    this.data.getNewReleases(true).subscribe(response => {
      this.newReleases = response;
      let len = this.newReleases.items.length;
      this.newReleases.items.splice(x,len);
    });
  }
}

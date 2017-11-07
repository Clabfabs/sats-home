import { SatsDataComponent } from '../sats-data/sats-data.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-usage',
  templateUrl: './api-usage.component.html',
  styleUrls: ['./api-usage.component.css']
})
export class ApiUsageComponent implements OnInit {

  constructor(private satsData: SatsDataComponent) {

  }

  getCoreVersion() {
    return this.satsData.getCoreTag() ? this.satsData.getCoreTag().substring(1) : null;
  }

  getOptVersion() {
    return this.satsData.getOptTag() ? this.satsData.getOptTag().substring(1) : null;
  }

  ngOnInit() {

  }

}

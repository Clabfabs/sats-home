import { SatsDataComponent } from '../sats-data/sats-data.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-usage',
  templateUrl: './api-usage.component.html',
  styleUrls: ['./api-usage.component.css']
})
export class ApiUsageComponent implements OnInit {
  data: SatsDataComponent;

  constructor(private satsData: SatsDataComponent) {
    this.data = satsData;
  }

  getSatsVersion() {
    return this.satsData.getSatsTag().replace('v', '');
  }

  ngOnInit() {

  }

}

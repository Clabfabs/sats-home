import { SatsDataComponent } from '../sats-data/sats-data.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private satsData: SatsDataComponent) {

  }

  ngOnInit() {
  }

}

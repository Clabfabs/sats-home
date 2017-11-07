import { SatsDataComponent } from './sats-data/sats-data.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private satsData: SatsDataComponent) {

  }
}

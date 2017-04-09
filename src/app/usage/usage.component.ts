import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit {

  public selection;

  constructor(private route: ActivatedRoute) {
    this.selection = 0;
  }

  select(index) {
    this.selection = index;
  }

  ngOnInit() {
    // TODO: Find a way how to nicely make a selection directly available without showing it in URL
    this.route.params.subscribe(params => {
      console.log(params);
      const selection = +params['selection'];
      if (selection >= 0 && selection < 4) {
        this.selection = selection;
      }
    });
  }

}

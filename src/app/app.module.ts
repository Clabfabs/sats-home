import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from "./app.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {GettingStartedComponent} from "./getting-started/getting-started.component";
import {UsageComponent} from "./usage/usage.component";
import {SatsCoreGettingStartedComponent} from "./getting-started/sats-core/sats-core.component";
import {SatsCliGettingStartedComponent} from "./getting-started/sats-cli/sats-cli.component";
import {SatsWebGettingStartedComponent} from "./getting-started/sats-web/sats-web.component";
import {SatsCoreUsageComponent} from "./usage/sats-core/sats-core.component";
import {SatsCliUsageComponent} from "./usage/sats-cli/sats-cli.component";
import {SatsWebUsageComponent} from "./usage/sats-web/sats-web.component";
import {SatsWebComponent} from './sats-web/sats-web.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'getting-started', component: GettingStartedComponent},
  {path: 'sats-web', component: SatsWebComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    GettingStartedComponent,
    UsageComponent,
    SatsCoreGettingStartedComponent,
    SatsCliGettingStartedComponent,
    SatsWebGettingStartedComponent,
    SatsCoreUsageComponent,
    SatsCliUsageComponent,
    SatsWebUsageComponent,
    SatsWebComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

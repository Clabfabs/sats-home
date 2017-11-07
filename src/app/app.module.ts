import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SatsWebComponent } from './sats-web/sats-web.component';
import { FaqComponent } from './faq/faq.component';
import { ApiUsageComponent } from './api-usage/api-usage.component';
import { SatsDataComponent } from './sats-data/sats-data.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sats-web', component: SatsWebComponent},
  {path: 'api-usage', component: ApiUsageComponent},
  {path: 'faq', component: FaqComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SatsWebComponent,
    FaqComponent,
    ApiUsageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SatsDataComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

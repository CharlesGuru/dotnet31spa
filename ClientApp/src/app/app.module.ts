import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { ShowWeatherComponent } from './weather-data/show-weather/show-weather.component';
import { AddEditWeatherComponent } from './weather-data/add-edit-weather/add-edit-weather.component';
import { SharedWeatherService}  from './shared-weather.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    WeatherDataComponent,
    ShowWeatherComponent,
    AddEditWeatherComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path : 'weather-data', component: WeatherDataComponent }
    ])
  ],

  providers: [SharedWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

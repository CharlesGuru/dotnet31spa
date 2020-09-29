import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';   // handle async request to web services


@Injectable({
  providedIn: 'root'
})
export class SharedWeatherService {

  //http intercpt for base url
  readonly APIUrl = '/api/weatherforecast';

  constructor(private http: HttpClient) { }

  getWeatherList():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl);
  }

  addWeather(val:any)
  {
    return this.http.post(this.APIUrl,val);
  }

  updateWeather(val:any)
  {
    return this.http.put(this.APIUrl,val);
  }

  deleteWeather(val:any)
  {
    return this.http.delete(this.APIUrl + '/' + val);
  }

}

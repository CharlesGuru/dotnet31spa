import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedWeatherService} from 'src/app/shared-weather.service';


@Component({
  selector: 'app-add-edit-weather',
  templateUrl: './add-edit-weather.component.html',
  styleUrls: ['./add-edit-weather.component.css']
})
export class AddEditWeatherComponent implements OnInit {

  constructor(private service:SharedWeatherService, public modal: NgbActiveModal) { }

  //@Input() forcast:WeatherForecast;
  forcast:WeatherForecast;
  Weatherid:number;
  Weatherdate: string;
  WeatherTempC: number;
  WeatherSummary: string;
  //userModel: WeatherForecast;

  addWeather()
  {
     // weatherid=0
      // this.service.addWeather(this.forcast).subscribe(res=>{
      //   alert(res.toString());
      // });
      this.service.addWeather(this.forcast).subscribe(res=>{
        alert(res.toString());
      });

  }

  updateWeather()
  {
    // weatherid!=0
    this.service.updateWeather(this.forcast).subscribe(res=>{
      alert(res.toString());
    });

  }


  ngOnInit(): void 
  {
    //console.log(this.userModel);
    console.log(this.forcast);
    this.Weatherid=this.forcast.weatherid;
    this.Weatherdate=this.forcast.date;
    this.WeatherTempC= this.forcast.temperatureC;
    this.WeatherSummary=this.forcast.summary;
  }

}

interface WeatherForecast 
{
  weatherid: number;
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedWeatherService} from 'src/app/shared-weather.service';
import { WeatherForecast } from 'src/app/models/weather-forecast';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-edit-weather',
  templateUrl: './add-edit-weather.component.html',
  styleUrls: ['./add-edit-weather.component.css']
})
export class AddEditWeatherComponent implements OnInit {

  constructor(private service:SharedWeatherService, public modal: NgbActiveModal, private FormBuilder : FormBuilder) { }

  //@Input() forcast:WeatherForecast;
  forcast:WeatherForecast;
  // Weatherid:number;
  // Weatherdate: string;
  // WeatherTempC: number;
  // WeatherSummary: string;
  addEditForm : FormGroup;

  addWeather()
  {
     // weatherid=0
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
    // this.Weatherid=this.forcast.weatherid;
    // this.Weatherdate=this.forcast.date;
    // this.WeatherTempC= this.forcast.temperatureC;
    // this.WeatherSummary=this.forcast.summary;

    this.addEditForm = this.FormBuilder.group({
      date:['', Validators.required],
      temperatureC:['', Validators.required],
      summary:['', Validators.required]
    });
  }

  onSubmit(){

    if(this.addEditForm.invalid)
    {
      return;
    }
    this.addWeather();
  }
}



import { Component, OnInit } from '@angular/core';
import { SharedWeatherService} from 'src/app/shared-weather.service';
import { NgbModal , ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AddEditWeatherComponent } from 'src/app/weather-data/add-edit-weather/add-edit-weather.component';


@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css']
})
export class ShowWeatherComponent implements OnInit {

  public forecasts: WeatherForecast[];
  public ModalWindowTitle:string;
  public ActivateAddEditComponent:boolean = false;
  public forcast:WeatherForecast;
  public closeResult:string = "";
  

  constructor(private service:SharedWeatherService, private modalService: NgbModal) { }

  ngOnInit(): void 
  {
    this.getWeatherList();
  }

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addWeatherClick()
  {

      this.ModalWindowTitle = "Add Weather";
      this.ActivateAddEditComponent = true;

      this.forcast={
        weatherid:0,
        date: "",
        temperatureC:0,
        temperatureF:0,
        summary:""
      };

      this.modalService.open(AddEditWeatherComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });

      // const ref = this.modalService.open(AddEditWeatherComponent, {ariaLabelledBy: 'modal-basic-title'});
      // ref.componentInstance.userModel  = this.forcast;
      // ref.componentInstance.ModalWindowTitle = this.ModalWindowTitle;
      // ref.result.then((yes)=> {
      //   console.log("ok click");
      // },
      // (cancel)=>{
      //   console.log("cancel click");
      // }

      // )
  }


  editWeatherClick(data)
  {
    this.ModalWindowTitle = "Edit Weather";
      this.ActivateAddEditComponent = true;
      this.forcast=data;

  }
  

  deleteWeatherClick(data)
  {

    this.ModalWindowTitle = "Delete Weather";
      this.ActivateAddEditComponent = true;
      this.forcast.weatherid=data;
      if (confirm('Are You Sure?')){
          this.service.deleteWeather(this.forcast.weatherid).subscribe(data=>{
            alert(data.toString());
            this.getWeatherList();
          });
      }

      
  }

  modalCloseClick()
  {
    this.ActivateAddEditComponent = false;
    this.getWeatherList();

  }

  getWeatherList()
  {
    this.service.getWeatherList().subscribe(data=>{
      this.forecasts=data;
    })

  
  }

}

interface WeatherForecast 
{
  weatherid:number;
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

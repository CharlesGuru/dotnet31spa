import { Component, OnInit } from '@angular/core';
import { SharedWeatherService} from 'src/app/shared-weather.service';
import { NgbModal , ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AddEditWeatherComponent } from 'src/app/weather-data/add-edit-weather/add-edit-weather.component';
import { WeatherForecast } from 'src/app/models/weather-forecast';


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


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
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

      //this.modalService.dismissAll();

      if ( !this.modalService.hasOpenModals() ) {
      const ref =  this.modalService.open(AddEditWeatherComponent);
      ref.componentInstance.forcast = this.forcast;

      ref.result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        console.log('test' + this.closeResult);
        console.log(this.forcast);
      }, (result) => {
        this.closeResult = `Dismissed ${this.getDismissReason(result)}`;
        console.log(this.closeResult);
      });

      }
      else
      {
        alert('Close current modal window');
      }

      // this.modalService.open(AddEditWeatherComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //   this.closeResult = `Closed with: ${result}`;
      // }, (reason) => {
      //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      // });
  }


  editWeatherClick(data)
  {
    this.ModalWindowTitle = "Edit Weather";
      this.ActivateAddEditComponent = true;
      this.forcast=data;

  }
  
  deleteWeatherClick(data)
  {
  //   $.confirm({
  //     title: 'Confirm!',
  //     content: 'Are you sure you want to refund invoice ?',
  //     confirm: function(){
  //       this.service.deleteWeather(data).subscribe(data=>{
  //         alert(data.toString());
  //         this.getWeatherList();
  //     },
  //     cancel: function(){
  //       this.getWeatherList();
  //     }
  // }); 

      if (confirm('Are You Sure you want to Delete this?')){
          this.service.deleteWeather(data).subscribe(data=>{
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



import { Component } from '@angular/core';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city:string;
  constructor(private weatherService:WeatherService){}
  getWeather(){
  this.weatherService.inpbtnevent.emit({cityName:this.city})
  }

  }

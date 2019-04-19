import { Component } from '@angular/core';
import {WeatherService} from 'src/app/weather.service'
import {Weather} from 'src/app/weatherMetaData'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city:string="";
  a:boolean=false;
  constructor(private weatherData: WeatherService){}
  weatherOb:Weather[]=[];
  getWeather(){
    return this.weatherData.getWeather(this.city).subscribe((data:any)=>{
      console.log(data);
      for(let i=0;i<data.list.length;i=i+8){
        const temp = new Weather(data.list[i].dt_txt,
        data.city.name,
        data.list[i].main.temp,
        data.list[i].weather[0].icon,
        data.list[i].weather[0].description,
        data.list[i].main.temp_max,
        data.list[i].main.temp_min,
        data.list[i].main.pressure,
        data.list[i].main.humidity,
        data.list[i].wind.speed,
        data.city.country)
        this.weatherOb[i/8] = temp 
        this.a=true
        }   
      }),
      (error)=>{
        console.log("City Not found")
        console.log(error)
      }
    }
  }

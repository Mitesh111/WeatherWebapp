import{HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class WeatherService{

    inpbtnevent=new EventEmitter<{cityName:string}>();
    apiKey='0788b1bf96a54952f8941c93d6e74026';
    private url:string;
    constructor(private htttpClient:HttpClient){
        this.url='https://api.openweathermap.org/data/2.5/forecast?q=';
    }
    
    getWeather(city:string){
        return this.htttpClient.get(this.url+city+'&appid='+this.apiKey);
    }
}

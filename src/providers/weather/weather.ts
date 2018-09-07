import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
url= 'http://api.openweathermap.org/data/2.5/weather?q=';

appid='&&appid=f0901896e37712794e2078d37c2cb9c6';

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  getWeather(city:string){
    
    return this.http.get(this.url+city+',za'+this.appid);
  }

}
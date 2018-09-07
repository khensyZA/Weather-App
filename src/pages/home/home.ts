import { WeatherProvider } from './../../providers/weather/weather';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

weather:any;
value:string;
city: string;
main:string;
description:string;
temperature:number;
humidity:number;
date:number;
windSpeed:number;



  constructor(public navCtrl: NavController, private service: WeatherProvider) {

  }
  getWeather(value:any){
    this.service.getWeather(this.city).subscribe(results=>{
    this.weather= results;


    this.main=this.weather.weather[0].main;
    this.description= this.weather.weather[0].description;

    this.temperature= this.weather.main.temp-273.15;
    this.humidity= this.weather.main.humidity;

    this.windSpeed= this.weather.wind.seed;

    this.date= this.weather.dt;

    console.log("response:",results);

  });

}

}

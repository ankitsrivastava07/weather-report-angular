import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';
import { HttpService } from '../http.service';
import { WeatherData } from '../weather-data';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city = '' 
  reportType = 'Celsius'
  flag = false;
  isError = false;
  isEmpty = false;
  errorMsg = ''
  uri = 'http://localhost:8080/weather/report/'
  weather: WeatherData = {
    description: '',
    temp: '',
    feels_like: '',
    temp_max: '',
    country: '',
    city: '',
    windSpeed: '',
    humidity: '',
    temp_min: '',

  }
  
 constructor(private httpService: HttpService,private http: HttpClient){
 }
  getWeatherReport(){
    this.isError = false;
   this.isEmpty = false;
    if(this.city === ''){
        this.isEmpty = true;
        return
    }

   this.flag= false
   this.http.get<WeatherData>(this.uri + this.reportType + '?city=' + this.city).subscribe(data => {
    this.weather = JSON.parse(JSON.stringify(data));
   },
   
   (error: HttpErrorResponse) => {
    this.isError = true;
    this.errorMsg = JSON.parse(JSON.stringify(error.error.error.error));
  });
  }
}

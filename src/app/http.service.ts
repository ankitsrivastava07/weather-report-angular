import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from './api-response';
import { WeatherData } from './weather-data';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private uri = 'http://localhost:8080/weather/report/'
  constructor(private http: HttpClient) { }

  li:any;
  lis=[];

  getWeatherReport(city:string,reportType:string) {
    return this.http.get<ApiResponse>(this.uri + reportType + '?city=' + city);
  }
}

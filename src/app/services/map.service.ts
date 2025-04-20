import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILocation } from '../models/ITour';
import { Observable } from 'rxjs';
import { IWeatherResponce } from '../models/Map';
import { API } from '../shared/api';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getWeather(coord: ILocation): Observable<IWeatherResponce> {
    const params = {
      "latitude": coord.lat,
      "longitude": coord.lng,
      "hourly": "temperature_2m",
      "current": ["is_day", "snowfall", "rain"],
      "forecast_days": 1
    }

    return this.http.get<IWeatherResponce>(API.getWeather,{params})
  }
}

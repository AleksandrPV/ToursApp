import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../shared/api';
import { ITour, ITourServerRes } from '../models/ITour';
import { IApi } from '../models/IApi';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  constructor(private http:HttpClient) { }

  getTours(): Observable<ITourServerRes> {
    return this.http.get<ITourServerRes>(API.tours)
  }

  getTourById(id: string): Observable<ITour> {
    const path = API.tour+'/'+id;
    return this.http.get<ITour>(path);
  }
}

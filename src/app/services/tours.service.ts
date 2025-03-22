import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../shared/api';
import { ITour } from '../models/ITour';
import { IApi } from '../models/IApi';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  constructor(private http:HttpClient) { }

  getTours(): Observable<any> {
    return this.http.get(API.tours)
  }

  getTourById(id: string): Observable<any> {
    const path = API.tour+'/'+id;
    return this.http.get(path);
  }
}

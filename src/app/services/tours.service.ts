import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, forkJoin, map, Observable, of, Subject, switchMap, tap } from 'rxjs';
import { API } from '../shared/api';
import { Coords, ICountriesResponseItem, ITour, ITourServerRes, ITourTypes } from '../models/ITour';
import { IApi } from '../models/IApi';
import { LoaderService } from './loader.service';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  // type
  private tourTypeSubject = new Subject<ITourTypes>();
  readonly tourType$ = this.tourTypeSubject.asObservable();
  
  // date
  private tourDateSubject = new Subject<Date>();
  readonly tourDate$ = this.tourDateSubject.asObservable();

  constructor(
    private http:HttpClient,
    private loaderService: LoaderService,
    private mapService: MapService
  ) { }

  getTours(): Observable<ITour[]> {

    this.loaderService.setLoader(true);
    console.log('__________loader service ', this.loaderService);
    const countries = this.http.get<ICountriesResponseItem[]>(API.countries);
    const tours = this.http.get<ITourServerRes>(API.tours);
    // const testObservable = of(1).pipe(
    // delay(4000)
    // )

    // parallel requests
    return forkJoin<[ICountriesResponseItem[], ITourServerRes]>([countries, tours]).pipe(
      delay(1500),
      map((data) => {
        console.log('***** data', data)
        let toursWithCountries = [] as ITour[];
        const toursArr = data[1].tours;
        const countriesMap = new Map();

        data[0].forEach((country) => {
          countriesMap.set(country.iso_code2, country);
        });

        if (Array.isArray(toursArr)) {
          console.log('***** toursArr', toursArr)
          toursWithCountries = toursArr.map((tour) => {
            return {
              ...tour,
              country: countriesMap.get(tour.code) || null
            };
          });
        }
        return toursWithCountries;
      }),
      tap((data) => {
        //hide loader
        this.loaderService.setLoader(false);
      }),
      catchError((err) => {
        this.loaderService.setLoader(false);
        return of(null)
      }),
    )
  }

  // getTours(): Observable<ITourServerRes> {
  //   return this.http.get<ITourServerRes>(API.tours)
  // }

  getTourById(id: string): Observable<ITour> {
    const path = API.tour+'/'+id;
    return this.http.get<ITour>(path);
  }

  getNearestTourByLocationId(id: string): Observable<ITour[]> {
    return this.http.get<ITour[]>(API.nearestTours, {
      params: {locationId: id}
    });
  }

  searchTours(tours: ITour[], value: string): ITour[] {
    if (Array.isArray(tours)) {
      return tours.filter((tour) => {

        if (tour && typeof tour.name === 'string') {
          return tour.name.toLowerCase().includes(value.toLowerCase());
        } else {
          return false;
        }
      });
    } else {
      return [];
    }
  }

  initChangeTourType(val: ITourTypes): void {
    this.tourTypeSubject.next(val);
  }

  initChangeTourDate(val: Date): void {
    this.tourDateSubject.next(val);
  }

  getCountryByCode(code: string): Observable<any> {
    return this.http.get<Coords[]>(API.countryByCode, {params: {codes: code}}).pipe(

      //send new data
      map((countrieDataArr) => countrieDataArr[0]),

      switchMap((countrieData) => {
        console.log('countrieData ', countrieData);
        const coords = {lat: countrieData.latlng[0], lng: countrieData.latlng[1]};

        //newObservable
        return this.mapService.getWeather(coords).pipe(
          map((weatherResponce) => {

            const current = weatherResponce.current;
            const hourly = weatherResponce.hourly;

            const weatherData = {
              isDay: current.is_day,
              snowfall: current.snowfall,
              rain: current.rain,
              currentWeather: hourly.temperature_2m[15]
            };

            console.log('weatherData ', weatherData);
            return {countrieData, weatherData};
          
          })
          
        )
      })
    )
  }

}

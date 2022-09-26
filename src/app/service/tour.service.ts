import { Injectable } from '@angular/core';
import {Tour} from "../model/Tour";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TourService {

  tours:Tour[]=[];
  constructor(private httpClient:HttpClient) { }
  findAll(): Observable<Tour[]>{
    return this.httpClient.get<Tour[]>("http://localhost:3000/tuors");
  }
  create(tour: any): Observable<Tour> {
    return this.httpClient.post<Tour>("http://localhost:3000/tuors" , tour);
  }
  edit(id: number, tour: Tour): Observable<Tour> {
    return this.httpClient.put<Tour>(`http://localhost:3000/tuors/${id}`, tour);
  }
  findById(id: number): Observable<Tour> {
    return this.httpClient.get<Tour>(`http://localhost:3000/tuors/${id}`);
  }
  delete(id: number): Observable<Tour> {
    return this.httpClient.delete<Tour>(`http://localhost:3000/tuors/${id}`);
  }
}

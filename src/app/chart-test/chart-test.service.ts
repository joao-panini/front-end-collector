import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChartTestService {

  constructor(private http: HttpClient) { }

  getWVI() {
    return this.http.get('http://localhost:8080/api/findAll')
  }
}

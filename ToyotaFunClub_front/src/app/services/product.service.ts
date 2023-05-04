import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getModel(): Observable<any> { 
    return this.http.get(this.baseurl + '/api/models/')
  }
  getCarsList(): Observable<any> { 
    return this.http.get(this.baseurl + '/api/cars/')
  }
  createUser(username, password): Observable<any> { 
    const body = {username: username, password:password}
    return this.http.post(this.baseurl + '/api/cars/:carsId/', body)
  }
  
}

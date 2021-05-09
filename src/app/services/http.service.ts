import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl: string = `${environment.baseUrl}/api`


  constructor(
    private http: HttpClient,
  ) { }

  get(query: string): Observable<any> {
    const url = `${this.baseUrl}/${query}`
    return this.http.get(url)
  }
}

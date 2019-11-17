import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) {}

  baseUrl = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };


  shortenUrl(longUrl): Observable<any> {
    return this.http.post(
      this.baseUrl+"/shortenUrl",
      JSON.stringify({
        longUrl : longUrl
      }),
      this.httpOptions
    );
  }

}

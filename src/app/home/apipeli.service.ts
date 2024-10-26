import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApipeliService {
  private url:string = 'https://lightgrey-owl-901213.hostingersite.com/api/get_peliculas.php?limit=100'



  constructor(
    private readonly http:HttpClient

  ) { }

  resultadoPeli():Observable<any> {
    return this.http.get(this.url)
  }


}



















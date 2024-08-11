import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private _HttpClient:HttpClient) { }

  getContent():Observable<any>{
    return this._HttpClient.get('https://fakestoreapi.com/products')
  }
}

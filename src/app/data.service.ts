import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API_URL:string = 'https://gorest.co.in/public/v2/todos'
  private dataObservable = this.httpClient.get(this.API_URL);


  constructor(private httpClient: HttpClient) { 
    
  }

  public getData(){
    return this.dataObservable
  }
}

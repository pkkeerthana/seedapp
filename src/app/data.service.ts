import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  listData(){
    return this.http.get('http://riorafashions.com:5002/rioracrm/api/crm/segment');
  }

  fetchSegment(id){
    console.log("hallo");
    return this.http.get('http://riorafashions.com:5002/rioracrm/api/crm/segment/' + id);
  }

  addUpdate(){
    return this.http.get("http://riorafashions.com:5002/rioracrm/api/crm/consumerCategory");
  }
}

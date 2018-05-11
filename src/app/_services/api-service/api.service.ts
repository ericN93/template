import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ApiService {

  private readonly API_URL = 'https://jsonplaceholder.typicode.com/posts';
  private htttOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Token': 'token'
    })
  }
  constructor(private http: HttpClient){ }

  getData() {
    return this.http.get(this.API_URL, this.htttOptions)
  }

  getSpecificPost(id) {
    return this.http.get(this.API_URL + '/' + id, this.htttOptions)
  }
}

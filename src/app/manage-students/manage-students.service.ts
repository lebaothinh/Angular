import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ManageStudentsService {

  arr: [
    {}
  ];
  constructor(private http: Http) { }
  getPromise()
  {
    return this.http.get('http://5b1104db3ffdad0014dacd97.mockapi.io/managestudents/Students')
    .map((response: Response) => response.json())
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class EmpdateService {

  constructor(private http: HttpClient) {

  }
  getEmpDetails() {
    const url = environment.url + '/employees';
    return this.http.get(url);
  }
  getEmpDetail(id?: any) {
    const url = environment.url + '/employee/' + id;
    return this.http.get(url);
  }

  deleteEmpDetails(id?: any){
    const url = environment.url + '/delete/' + id;
    return this.http.delete(url);
  }
  
  updateEmpDetails(id?: any, body?: any){
    const url = environment.url + '/update/' + id;
    return this.http.put(url,body);
  }
  
  createEmp(body){
    const url = environment.url + '/create';
    return this.http.post(url,body);
  }
}

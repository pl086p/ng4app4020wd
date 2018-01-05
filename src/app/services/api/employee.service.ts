import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

import { EmployeeType } from '../employee/employee-type';

@Injectable()
export class EmployeeService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private employeeUrl = 'http://localhost:8020/jpaRest/employees'; 

  constructor(private http: Http) { }

  getEmployees(): Observable<EmployeeType[]> {
      return this.http.get(this.employeeUrl)
               .map(this.extractData)
               .catch(this.handleError);
  }  

  private extractData(res: Response) {
    let body =res.json();
    return body;
  }

  getEmployee(id: number): Promise<EmployeeType> {
    const url = `${this.employeeUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as EmployeeType)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.employeeUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // http.post()
  create(name: string): Promise<EmployeeType> {
    return this.http
      .post(this.employeeUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as EmployeeType)
      .catch(this.handleError);
  }

  // http.put()
  update(employee: EmployeeType): Promise<EmployeeType> {
    const url = `${this.employeeUrl}/${employee.id}`;
    return this.http
      .put(url, JSON.stringify(employee), {headers: this.headers})
      .toPromise()
      .then(() => employee)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

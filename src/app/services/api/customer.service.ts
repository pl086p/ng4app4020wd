import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

import { CustomerType } from '../customer/customer-type';

@Injectable()
export class CustomerService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private customerUrl = 'http://localhost:8020/customer/all'; //api/heroes';  // URL to web api

  constructor(private http: Http) { }

  getCustomers(): Observable<CustomerType[]> {
      return this.http.get(this.customerUrl)
               .map(this.extractData)
               .catch(this.handleError);
  }  

  private extractData(res: Response) {
    let body =res.json();
    return body;
  }

  getCustomer(id: number): Promise<CustomerType> {
    const url = `${this.customerUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as CustomerType)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.customerUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // http.post()
  create(name: string): Promise<CustomerType> {
    return this.http
      .post(this.customerUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as CustomerType)
      .catch(this.handleError);
  }

  // http.put()
  update(hero: CustomerType): Promise<CustomerType> {
    const url = `${this.customerUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

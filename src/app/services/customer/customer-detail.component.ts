import { Component, Input } from '@angular/core';
import { CustomerType } from './customer-type';
import { CustomerService } from '../api/customer.service';

@Component({
    selector: 'tag-customer-detail',
    templateUrl:  './customer-detail.component.html',
    providers: [CustomerService]
})
export class CustomerDetailComponent {
  @Input() customer: CustomerType;

  inputCustomerName = '';

  onSaveCustomer(id) {
    console.log('====' + id);
    console.log('====' + this.inputCustomerName);

    this.getCustomers();

    console.log('==== customer recordcount: ' + this.customers.length);
  }

  // 
  customers: CustomerType[];
  statusCode: number;

  constructor(private customerService: CustomerService) { 
    // called first time before the ngOnInit
  }

  private headers = new Headers({'Content-Type': 'application/json'});
  private customerUrl = 'http://localhost:8020/customer/all'; //api/heroes';  // URL to web api

  getCustomers() {
    this.customerService.getCustomers()
     .subscribe(
        data  => this.customers = data,
        errorCode => this.statusCode = errorCode); 
  }
}
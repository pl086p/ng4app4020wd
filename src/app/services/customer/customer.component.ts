import { Component, OnInit } from '@angular/core';
import { CustomerType }    from './customer-type';
import { CustomerService } from '../api/customer.service';

@Component({
  selector: 'app-http-api',
  templateUrl: './customer.component.html',
  styleUrls:  ['./customer.component.scss'],
  providers: [CustomerService]
})
export class ComCustomer implements OnInit {
  title = 'Consume Rest Service (Customers)';
  customers: CustomerType[];
  selectedCustomer: CustomerType;
  errorMessage: String;
  statusCode: number;

  constructor(private customerService: CustomerService) { 
    // called first time before the ngOnInit
  }

  getCustomers() {
    this.customerService.getCustomers()
     .subscribe(
        data  => this.customers = data,
        errorCode => this.statusCode = errorCode); 
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  onSelect(customer: CustomerType): void {
    this.selectedCustomer = customer;
  }

}

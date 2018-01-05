import { Component, OnInit } from '@angular/core';
import { EmployeeType }      from './employee-type';
import { EmployeeService }   from '../api/employee.service';

@Component({
  selector: 'app-service',
  templateUrl: './employee.component.html',
  styleUrls:  ['./employee.component.scss'],
  providers: [EmployeeService]
})
export class ComEmployee implements OnInit {
  title = 'Consume Rest Service (Employees)';
  employees: EmployeeType[];
  selectedEmployee: EmployeeType;
  errorMessage: String;
  statusCode: number;

  constructor(private employeeService: EmployeeService) { 
    // called first time before the ngOnInit
  }

  getEmployees() {
    this.employeeService.getEmployees()
     .subscribe(
        data  => this.employees = data,
        errorCode => this.statusCode = errorCode); 
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  onSelect(employee: EmployeeType): void {
    this.selectedEmployee = employee;
  }

}

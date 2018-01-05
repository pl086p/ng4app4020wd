import { Component, Input } from '@angular/core';
import { EmployeeType } from './employee-type';

@Component({
  selector: 'tag-employee-detail',
  templateUrl:  './employee-detail.component.html',
})
export class ComEmployeeDetail {
  @Input() employee: EmployeeType;
}
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ProductType } from '../product-info/product-class';

@Component({
    moduleId: module.id,
    selector: 'app-car-list',
    templateUrl: './car-list.component.html',
    styleUrls:  ['./car-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ComCarList { 
  @Input('pTitle') title: String;
  @Input('pCars')  pCars: ProductType;
}

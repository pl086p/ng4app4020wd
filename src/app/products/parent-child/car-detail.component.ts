import { Component, OnInit, Input } from '@angular/core';
import { ProductType } from '../product-info/product-class';

@Component({
  selector: 'car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class ComCarDetail implements OnInit {

  @Input() car: ProductType;

  constructor() { }

  ngOnInit() { } 

  inputModel = '';
  inputMaker = '';

  onClickToSave(){
    console.log('==='+ this.inputModel);
    console.log('==='+ this.inputMaker);
  }

}

import {Component, ViewEncapsulation} from '@angular/core';
import { ProductType } from '../product-info/product-class';

const CARS: ProductType[] = [
  { id: 1, model: 'Explorer', manufacturer: 'Ford' },
  { id: 2, model: 'Chevlet', manufacturer: 'GM' },
  { id: 3, model: 'Pilot', manufacturer: 'Honda' },
  { id: 4, model: 'Highland', manufacturer: 'Toyota' }
];

@Component({
    moduleId: module.id,
    selector: 'app-car-main',
    templateUrl: './parent.component.html',
    styleUrls:  ['./parent.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ComParent { 
  pTitle = ' Parent-Child and Master-Detail';

  // Car: master-detail
  pCars = CARS;
  selectedCar: ProductType;
  onSelect(car: ProductType): void { this.selectedCar = car; };

  // send messaget to Child
  parentInput1 = 'parentInput1-default';
  parentInput2 = 'parentInput2-default'; 
  parentInputClick = 'parentInputClick-default';

  onClickToChild() {
        console.log(this.parentInput1);
        console.log(this.parentInput2);
        console.log(this.parentInputClick);
        this.parentInputClick = this.parentInput2 + ' (click to send)';
  }

  // receive massage from child
  msgFromChild  = '';

  printMsg(msg){
    this.msgFromChild = msg;
  }
}

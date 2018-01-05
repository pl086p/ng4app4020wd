import {Component, ViewEncapsulation} from '@angular/core';
import { Bike } from '../bike-info/bike';

const BIKES: Bike[] = [
  { id: 1, model: 'CBR250R', manufacturer: 'Honda' },
  { id: 2, model: 'Ninja1000RR', manufacturer: 'Kawasaki' },
  { id: 3, model: 'myTest-1', manufacturer: 'Tester' }
];

@Component({
    moduleId: module.id,
    selector: 'app-bike-main',
    templateUrl: './bike-main.component.html',
    styleUrls:  ['./bike-main.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ComBike { 
  title = 'Bike List (title variable)';
  bikes = BIKES;
  selectedBike: Bike;
  onSelect(bike: Bike): void { this.selectedBike = bike; }
}

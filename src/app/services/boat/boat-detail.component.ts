import { Component, Input } from '@angular/core';
import { BoatType } from './boat-type';

@Component({
  selector: 'tag-boat-detail',
  templateUrl:  './boat-detail.component.html',
})
export class ComBoatDetail {
  @Input() boat: BoatType;
}
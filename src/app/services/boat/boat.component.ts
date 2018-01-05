import { Component, OnInit } from '@angular/core';
import { BoatType } from './boat-type';
import { BoatService } from '../api/boat.service';

@Component({
  selector: 'app-boat-service',
  templateUrl: './boat.component.html',
  styleUrls:  ['./boat.component.scss'],
  providers: [BoatService]
})
export class ComBoat implements OnInit {
  title = 'Consume Mock-Service (Boat)';
  boats: BoatType[];
  selectedBoat: BoatType;

  constructor(private boatService: BoatService) { }

  getBoats(): void {
    this.boatService.getBoats().then(boats => this.boats = boats);
  }

  ngOnInit(): void {
    this.getBoats();
  }

  onSelect(boat: BoatType): void {
    this.selectedBoat = boat;
  }
}

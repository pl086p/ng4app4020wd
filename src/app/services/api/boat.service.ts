import { Injectable } from '@angular/core';

import { BoatType }   from '../boat/boat-type';
import { BOATS } from './boat-mock-data';

@Injectable()
export class BoatService {
  getBoats(): Promise<BoatType[]> {
    return Promise.resolve(BOATS);
  }

  // See the "Take it slow" appendix
  getBoatsSlowly(): Promise<BoatType[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getBoats()), 2000);
    });
  }
}


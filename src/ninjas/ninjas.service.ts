import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'Ninja A', weapon: 'shuriken' },
    { id: 1, name: 'Ninja B', weapon: 'kunai' },
  ];

  getNinjas(weapon?: 'shuriken' | 'kunai') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }
}

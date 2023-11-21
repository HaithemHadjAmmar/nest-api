import { Injectable } from '@nestjs/common';
import { CreateReadStreamOptions } from 'fs/promises';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Injectable()
export class NinjasService {
    private ninjas = [
        { id: 0, name: 'ninjaA', weapon: 'stars' }, 
        { id:1, name: 'ninjaB', weapon: 'nunchucks' },
    ]
    getNinjas(weapon?: 'stars' | 'nunchucks'){
  
    if (weapon) {
        return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
         return this.ninjas;
    }

    getNinja(id: number ) {
        const ninja = this.ninjas.find((ninja) => ninja.id === id);
    
    if(!ninja) {
        throw new Error('ninja not fund')
    }
    return ninja;
    }

    createNinja(createNinjaDto: CreateNinjaDto) {
        const newNinja = {
            ...createNinjaDto,
            id: Date.now()
        };
        this.ninjas.push(newNinja);
    }
}

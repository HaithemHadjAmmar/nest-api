import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasModule } from './ninjas.module';
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

        return newNinja;
    }

    updateNinja(id: number, updateNinjaDto: UpdateNinjaDto): NinjasModule | undefined {
        const index = this.ninjas.findIndex(ninja => ninja.id === id);
    
        if (index !== -1) {
            this.ninjas[index] = {
                ...this.ninjas[index],
                ...updateNinjaDto,
            };
            return this.getNinja(id);
        }
    
        return undefined;
    }

    removeNinja(id: number) {
        const tobeRemoved = this.getNinja(id);

        this.ninjas = this.ninjas.filter((ninja) => ninja.id != id);

        return tobeRemoved;
    }
   

}

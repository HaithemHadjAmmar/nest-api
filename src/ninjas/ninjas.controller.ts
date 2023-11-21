import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

// const service = new NinjasService();
// const controller = new NinjasController(service);

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService) {}

@Get()
getNinjas(
    @Query('weapon') weapon: 'stars' | 'nunchucks'
) {
   
    return this.ninjasService.getNinjas(weapon);
}

@Get(':id')
getOneNinja(
    @Param('id') id: string
) {
  return {
    id,
  }
}

@Post(':id')
createNinja(
   @Body() createNinjaDto: CreateNinjaDto
) {
  return {
    name: createNinjaDto.name,
  };
}

@Put(':id')
updateNinja(
    @Param('id') id: string, @Body() UpdateNinjaDto: UpdateNinjaDto
) {
  return {
    id,
    name: UpdateNinjaDto.name,
  };
}

@Delete(':id')
removeNinja(
    @Param('id') id: string
) {
    return {
        id,
    };
}

}

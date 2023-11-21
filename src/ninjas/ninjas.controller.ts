import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Controller('ninjas')
export class NinjasController {

@Get()
getNinjas(
    @Query('type') type: string
) {
  return [{ type }];
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
    name: createNinjaDto.name
  };
}

@Put(':id')
updateNinja(
    @Param('id') id: string
) {
  return {
    id,
  };
}

@Delete(':id')
removeNinja(
    @Param('id') id: string
) {
    return {};
}

}

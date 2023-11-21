import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

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
   @Body() createNinjaDto
) {
  return {};
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

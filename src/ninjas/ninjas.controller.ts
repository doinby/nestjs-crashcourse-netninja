import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  // Inject the NinjasService
  constructor(private readonly ninjasService: NinjasService) {}

  // Get all ninjas
  @Get()
  getNinjas(@Query('weapon') weapon: 'shuriken' | 'kunai') {
    return this.ninjasService.getNinjas(weapon);
  }

  // Get a ninja
  @Get(':id')
  getNinja(@Param('id') id: string) {
    return { id };
  }

  // Create a ninja
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return { name: createNinjaDto.name };
  }

  // Update a ninja
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return {
      id,
      name: updateNinjaDto,
    };
  }
}

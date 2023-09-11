import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  // Get all ninjas
  @Get()
  getNinjas(@Query('type') type: string) {
    return [{ type }];
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

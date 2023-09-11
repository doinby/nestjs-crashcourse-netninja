import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
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
  getNinja(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.ninjasService.getNinja(+id);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  // Create a ninja
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDto);
  }

  // Update a ninja
  @Put(':id')
  updateNinja(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNinjaDto: UpdateNinjaDto,
  ) {
    return this.ninjasService.updateNinja(+id, updateNinjaDto);
  }

  // Remove a ninja
  @Delete(':id')
  removeNinja(@Param('id', ParseIntPipe) id: number) {
    return this.ninjasService.removeNinja(+id);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post, Put
} from '@nestjs/common'
import { PlaysDto } from './dto/plays.dto'
import { PlaysService } from './plays.service'
import { Plays } from './schemas/plays.schema'
import {UpdateTicketsDto} from '../ticket-window/dto/update-tickets.dto'

@Controller('plays')
export class PlaysController {
  constructor(private readonly playsService: PlaysService) {}

  @Get()
  getAll(): Promise<Plays[]> {
    return this.playsService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Plays> {
    return this.playsService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() playsDto: PlaysDto): Promise<Plays> {
    return this.playsService.create(playsDto)
  }

  @Delete(':id')
  @HttpCode(200)
  remove(@Param('id') id: string) {
    return this.playsService.remove(id)
  }

  @Put(':id')
  @HttpCode(200)
  update(@Param('id') id: string, @Body() playsDto: PlaysDto) {
    return this.playsService.update(id, playsDto)
  }
}

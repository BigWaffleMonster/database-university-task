import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post
} from '@nestjs/common'
import { PlaysDto } from './dto/plays.dto'
import { PlaysService } from './plays.service'
import { Plays } from './schemas/plays.schema'

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
}

import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post
} from '@nestjs/common'
import { TheaterLocationDto } from './dto/create-theater-location.dto'
import { TheaterLocation } from './schemas/theater-location.schema'
import { TheaterLocationService } from './theater-location.service'

@Controller('theater-location')
export class TheaterLocationController {
  constructor(
    private readonly theaterLocationService: TheaterLocationService
  ) {}

  @Get()
  getAll(): Promise<TheaterLocation[]> {
    return this.theaterLocationService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<TheaterLocation> {
    return this.theaterLocationService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body() theaterLocationDto: TheaterLocationDto
  ): Promise<TheaterLocation> {
    return this.theaterLocationService.create(theaterLocationDto)
  }
}

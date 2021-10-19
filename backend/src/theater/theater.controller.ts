import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post
} from '@nestjs/common'
import { TheaterDto } from './dto/theater.dto'
import { Theater } from './schema/theater.schema'
import { TheaterService } from './theater.service'

@Controller('theater')
export class TheaterController {
  constructor(private readonly theaterService: TheaterService) {}

  @Get()
  getAll(): Promise<Theater[]> {
    return this.theaterService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Theater> {
    return this.theaterService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() theaterDto: TheaterDto): Promise<Theater> {
    return this.theaterService.create(theaterDto)
  }
}

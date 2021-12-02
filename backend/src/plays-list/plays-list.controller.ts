import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post, Put
} from '@nestjs/common'
import { PlaysListDto } from './dto/plays-list.dto'
import { PlaysListService } from './plays-list.service'
import { PlaysList } from './schemas/plays-list.schema'
import {UpdateTicketsDto} from '../ticket-window/dto/update-tickets.dto'
import {PlaysListUpdateDto} from './dto/plays-list-update.dto'

@Controller('plays-list')
export class PlaysListController {
  constructor(private readonly playsListService: PlaysListService) {}

  @Get()
  getAll(): Promise<PlaysList[]> {
    return this.playsListService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<PlaysList> {
    return this.playsListService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() playsListDto: PlaysListDto): Promise<PlaysList> {
    return this.playsListService.create(playsListDto)
  }

  @Put(':id')
  @HttpCode(200)
  update(@Param('id') id: string, @Body() playsListUpdateDto: PlaysListUpdateDto) {
    return this.playsListService.update(id, playsListUpdateDto)
  }
}

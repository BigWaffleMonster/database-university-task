import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post
} from '@nestjs/common'
import { PlaysListDto } from './dto/plays-list.dto'
import { PlaysListService } from './plays-list.service'
import { PlaysList } from './schemas/plays-list.schema'

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
}

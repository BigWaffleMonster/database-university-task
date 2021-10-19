import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post
} from '@nestjs/common'
import { PlaysScheduleListDto } from './dto/plays-schedule-list.dto'
import { PlaysScheduleListService } from './plays-schedule-list.service'
import { PlaysScheduleList } from './schemas/plays-schedule-list.schema'

@Controller('plays-schedule-list')
export class PlaysScheduleListController {
  constructor(
    private readonly playsScheduleListService: PlaysScheduleListService
  ) {}

  @Get()
  getAll(): Promise<PlaysScheduleList[]> {
    return this.playsScheduleListService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<PlaysScheduleList> {
    return this.playsScheduleListService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body() playsScheduleListDto: PlaysScheduleListDto
  ): Promise<PlaysScheduleList> {
    return this.playsScheduleListService.create(playsScheduleListDto)
  }
}

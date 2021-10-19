import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post
} from '@nestjs/common'
import { StaffDto } from './dto/staff.dto'
import { Staff } from './schemas/staff.schema'
import { StaffService } from './staff.service'

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get()
  getAll(): Promise<Staff[]> {
    return this.staffService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Staff> {
    return this.staffService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() staffDto: StaffDto): Promise<Staff> {
    return this.staffService.create(staffDto)
  }
}

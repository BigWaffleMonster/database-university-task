import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post
} from '@nestjs/common'
import { TicketWindowDto } from './dto/ticket-window.dto'
import { TicketWindow } from './schemas/ticket-window.schema'
import { TicketWindowService } from './ticket-window.service'

@Controller('ticket-window')
export class TicketWindowController {
  constructor(private readonly ticketWindowService: TicketWindowService) {}

  @Get()
  getAll(): Promise<TicketWindow[]> {
    return this.ticketWindowService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<TicketWindow> {
    return this.ticketWindowService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() ticketWindowDto: TicketWindowDto): Promise<TicketWindow> {
    return this.ticketWindowService.create(ticketWindowDto)
  }
}

import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put
} from '@nestjs/common'
import { TicketWindowDto } from './dto/ticket-window.dto'
import { TicketWindow } from './schemas/ticket-window.schema'
import { TicketWindowService } from './ticket-window.service'
import {UpdateTicketsDto} from './dto/update-tickets.dto'

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

  @Put(':id')
  @HttpCode(200)
  update(@Param('id') id: string, @Body() updateTicketsDto: UpdateTicketsDto) {
    if (updateTicketsDto.tickets > 0) {
      return this.ticketWindowService.update(id, updateTicketsDto)
    } else {
      throw new Error('Tickets can`t be below 0')
    }
  }
}

import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { TicketWindowDto } from './dto/ticket-window.dto'
import {
  TicketWindow,
  TicketWindowDocument
} from './schemas/ticket-window.schema'

@Injectable()
export class TicketWindowService {
  constructor(
    @InjectModel(TicketWindow.name)
    private ticketWindowModel: Model<TicketWindowDocument>
  ) {}

  async getAll(): Promise<TicketWindow[]> {
    return this.ticketWindowModel.find().exec()
  }

  async getById(id: string): Promise<TicketWindow> {
    return this.ticketWindowModel.findById(id)
  }

  async create(ticketWindowDto: TicketWindowDto): Promise<TicketWindow> {
    const newTheaterLocation = new this.ticketWindowModel(ticketWindowDto)
    return newTheaterLocation.save()
  }

  async remove(id: string) {}

  async update(id: string) {}
}

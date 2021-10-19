import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import {
  TicketWindow,
  TicketWindowSchema
} from './schemas/ticket-window.schema'
import { TicketWindowController } from './ticket-window.controller'
import { TicketWindowService } from './ticket-window.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TicketWindow.name, schema: TicketWindowSchema }
    ])
  ],
  controllers: [TicketWindowController],
  providers: [TicketWindowService]
})
export class TicketWindowModule {}

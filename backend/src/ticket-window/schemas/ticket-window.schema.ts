import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import { PlaysScheduleList } from 'src/plays-schedule-list/schemas/plays-schedule-list.schema'
import { Staff } from 'src/staff/schemas/staff.schema'

export type TicketWindowDocument = TicketWindow & Document

@Schema()
export class TicketWindow {
  @Prop({ required: true })
  ticketWindowNumber: number

  @Prop({required: true, default: 100})
  tickets: number

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Staff' }] })
  cashierID: Staff[]

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'PlaysScheduleList' })
  playsScheduleListCodeRef: PlaysScheduleList

  @Prop({ required: true, default: true })
  isOpen: boolean
}

export const TicketWindowSchema = SchemaFactory.createForClass(TicketWindow)

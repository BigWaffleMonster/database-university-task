import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import { PlaysScheduleList } from 'src/plays-schedule-list/schemas/plays-schedule-list.schema'
import { Staff } from 'src/staff/schemas/staff.schema'

export type TicketWindowDocument = TicketWindow & Document

@Schema()
export class TicketWindow {
  @Prop({ required: true })
  ticketWindowCode: number

  @Prop({ required: true })
  ticketWindowNumber: number

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Staff' })
  cashierID: Staff

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'PlaysScheduleList' })
  playsScheduleListCodeRef: PlaysScheduleList
}

export const TicketWindowSchema = SchemaFactory.createForClass(TicketWindow)

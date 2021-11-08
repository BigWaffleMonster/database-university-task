import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type StaffDocument = Staff & Document

@Schema()
export class Staff {
  @Prop({ required: true, unique: true})
  passportID: number

  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  surname: string

  // @Prop({ type: [String], required: true })
  @Prop([String])
  schedule: string[]
}

export const StaffSchema = SchemaFactory.createForClass(Staff)

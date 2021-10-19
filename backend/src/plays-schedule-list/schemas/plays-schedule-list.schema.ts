import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import { PlaysList } from 'src/plays-list/schemas/plays-list.schema'

export type PlaysScheduleListDocument = PlaysScheduleList & Document

@Schema()
export class PlaysScheduleList {
  @Prop({ required: true })
  playsScheduleListCode: number

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'PlaysList' })
  listOfPlays: PlaysList

  @Prop({ required: true })
  playsScheduleListName: string
}

export const PlaysScheduleListSchema =
  SchemaFactory.createForClass(PlaysScheduleList)

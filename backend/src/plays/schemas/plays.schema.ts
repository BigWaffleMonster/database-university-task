import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type PlaysDocument = Plays & Document

@Schema()
export class Plays {
  @Prop({ required: true })
  playName: string

  @Prop({ required: true })
  genre: string

  @Prop({ required: true })
  genreRating: number

  @Prop({ required: true })
  dateAndTimeOfPlay: Date
}

export const PlaysSchema = SchemaFactory.createForClass(Plays)

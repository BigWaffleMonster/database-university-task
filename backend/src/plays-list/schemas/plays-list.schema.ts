import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import { Plays } from 'src/plays/schemas/plays.schema'

export type PlaysListDocument = PlaysList & Document

@Schema()
export class PlaysList {
  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Plays' }] })
  listOfPlays: Plays[]

  @Prop({ required: true })
  seasoneName: string

  @Prop({ required: true })
  year: number
}

export const PlaysListSchema = SchemaFactory.createForClass(PlaysList)

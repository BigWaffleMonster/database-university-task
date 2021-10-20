import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import { Plays } from 'src/plays/schemas/plays.schema'

export type PlaysListDocument = PlaysList & Document

@Schema()
export class PlaysList {
  @Prop({ required: true })
  seasoneCode: number

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Plays' }] })
  listOfPlays: Plays[]

  @Prop({ required: true })
  seasoneName: string
}

export const PlaysListSchema = SchemaFactory.createForClass(PlaysList)

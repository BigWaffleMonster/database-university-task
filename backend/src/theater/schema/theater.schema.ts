import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import { TheaterLocation } from 'src/theater-location/schemas/theater-location.schema'

export type TheaterDocument = Theater & Document

@Schema()
export class Theater {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'TheaterLocation' })
  location: TheaterLocation

  @Prop({ required: true })
  theaterCode: number

  @Prop({ required: true })
  theaterName: string

  @Prop({ required: true })
  theaterCreationDate: Date
}

export const TheaterSchema = SchemaFactory.createForClass(Theater)

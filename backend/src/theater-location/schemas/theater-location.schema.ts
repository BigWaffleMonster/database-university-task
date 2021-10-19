import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type TheaterLocationDocument = TheaterLocation & Document

@Schema()
export class TheaterLocation {
  @Prop({ required: true })
  countryCode: number

  @Prop({ required: true })
  countryName: string

  @Prop({ required: true })
  city: string

  @Prop({ required: true })
  zipCode: string
}

export const TheaterLocationSchema =
  SchemaFactory.createForClass(TheaterLocation)

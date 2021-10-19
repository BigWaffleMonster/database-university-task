import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Theater, TheaterSchema } from './schema/theater.schema'
import { TheaterController } from './theater.controller'
import { TheaterService } from './theater.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Theater.name, schema: TheaterSchema }])
  ],
  providers: [TheaterService],
  controllers: [TheaterController]
})
export class TheaterModule {}

import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import {
  TheaterLocation,
  TheaterLocationSchema
} from './schemas/theater-location.schema'
import { TheaterLocationController } from './theater-location.controller'
import { TheaterLocationService } from './theater-location.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TheaterLocation.name, schema: TheaterLocationSchema }
    ])
  ],
  controllers: [TheaterLocationController],
  providers: [TheaterLocationService]
})
export class TheaterLocationModule {}

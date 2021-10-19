import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { StaffSchema } from 'src/staff/schemas/staff.schema'
import { PlaysController } from './plays.controller'
import { PlaysService } from './plays.service'
import { Plays, PlaysSchema } from './schemas/plays.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Plays.name, schema: PlaysSchema }])
  ],
  controllers: [PlaysController],
  providers: [PlaysService]
})
export class PlaysModule {}

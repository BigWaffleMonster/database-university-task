import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PlaysScheduleListController } from './plays-schedule-list.controller'
import { PlaysScheduleListService } from './plays-schedule-list.service'
import {
  PlaysScheduleList,
  PlaysScheduleListSchema
} from './schemas/plays-schedule-list.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PlaysScheduleList.name, schema: PlaysScheduleListSchema }
    ])
  ],
  controllers: [PlaysScheduleListController],
  providers: [PlaysScheduleListService]
})
export class PlaysScheduleListModule {}

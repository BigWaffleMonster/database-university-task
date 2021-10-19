import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PlaysListController } from './plays-list.controller'
import { PlaysListService } from './plays-list.service'
import { PlaysList, PlaysListSchema } from './schemas/plays-list.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PlaysList.name, schema: PlaysListSchema }
    ])
  ],
  controllers: [PlaysListController],
  providers: [PlaysListService]
})
export class PlaysListModule {}

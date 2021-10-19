import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TheaterLocationController } from './theater-location/theater-location.controller'
import { TheaterLocationModule } from './theater-location/theater-location.module'
import { TheaterController } from './theater/theater.controller'
import { TheaterModule } from './theater/theater.module'
import { StaffModule } from './staff/staff.module'
import { PlaysModule } from './plays/plays.module'
import { PlaysListModule } from './plays-list/plays-list.module'
import { PlaysScheduleListModule } from './plays-schedule-list/plays-schedule-list.module'
import { TicketWindowModule } from './ticket-window/ticket-window.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/theaterTicketOffice'),
    TheaterLocationModule,
    TheaterModule,
    StaffModule,
    PlaysModule,
    PlaysListModule,
    PlaysScheduleListModule,
    TicketWindowModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

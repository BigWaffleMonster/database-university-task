import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { PlaysScheduleListDto } from './dto/plays-schedule-list.dto'
import {
  PlaysScheduleList,
  PlaysScheduleListDocument
} from './schemas/plays-schedule-list.schema'

@Injectable()
export class PlaysScheduleListService {
  constructor(
    @InjectModel(PlaysScheduleList.name)
    private playsScheduleListModel: Model<PlaysScheduleListDocument>
  ) {}

  async getAll(): Promise<PlaysScheduleList[]> {
    return this.playsScheduleListModel.find().exec()
  }

  async getById(id: string): Promise<PlaysScheduleList> {
    return this.playsScheduleListModel.findById(id)
  }

  async create(
    playsScheduleListDto: PlaysScheduleListDto
  ): Promise<PlaysScheduleList> {
    const newPlaysScheduleList = new this.playsScheduleListModel(
      playsScheduleListDto
    )
    return newPlaysScheduleList.save()
  }

  async remove(id: string) {}

  async update(id: string) {}
}

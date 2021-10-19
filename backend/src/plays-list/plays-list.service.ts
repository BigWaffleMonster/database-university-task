import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { PlaysListDto } from './dto/plays-list.dto'
import { PlaysList, PlaysListDocument } from './schemas/plays-list.schema'

@Injectable()
export class PlaysListService {
  constructor(
    @InjectModel(PlaysList.name)
    private PlaysList: Model<PlaysListDocument>
  ) {}

  async getAll(): Promise<PlaysList[]> {
    return this.PlaysList.find().exec()
  }

  async getById(id: string): Promise<PlaysList> {
    return this.PlaysList.findById(id)
  }

  async create(playsListDto: PlaysListDto): Promise<PlaysList> {
    const newPlaysList = new this.PlaysList(playsListDto)
    return newPlaysList.save()
  }

  async remove(id: string) {}

  async update(id: string) {}
}

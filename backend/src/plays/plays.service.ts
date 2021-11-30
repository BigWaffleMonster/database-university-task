import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { PlaysDto } from './dto/plays.dto'
import { Plays, PlaysDocument } from './schemas/plays.schema'

@Injectable()
export class PlaysService {
  constructor(
    @InjectModel(Plays.name) private playsModel: Model<PlaysDocument>
  ) {}

  async getAll(): Promise<Plays[]> {
    return this.playsModel.find().exec()
  }

  async getById(id: string): Promise<Plays> {
    return this.playsModel.findById(id)
  }

  async create(playsDto: PlaysDto): Promise<Plays> {
    const newPlay = new this.playsModel(playsDto)
    return newPlay.save()
  }

  async remove(id: string) {
    const response = await this.playsModel.findByIdAndDelete({ _id: id })

    return response
  }

  async update(id: string, playsDto: PlaysDto) {
    const response = await this.playsModel.findByIdAndUpdate(id, playsDto)

    return response
  }
}

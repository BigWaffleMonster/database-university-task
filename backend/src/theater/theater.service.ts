import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { TheaterDto } from './dto/theater.dto'
import { Theater, TheaterDocument } from './schema/theater.schema'

@Injectable()
export class TheaterService {
  constructor(
    @InjectModel(Theater.name) private theaterModel: Model<TheaterDocument>
  ) {}

  async getAll(): Promise<Theater[]> {
    return this.theaterModel.find().exec()
  }

  async getById(id: string): Promise<Theater> {
    return this.theaterModel.findById(id)
  }

  async create(theaterDto: TheaterDto): Promise<Theater> {
    const newTheater = new this.theaterModel(theaterDto)
    return newTheater.save()
  }

  async remove(id: string) {}

  async update(id: string) {}
}

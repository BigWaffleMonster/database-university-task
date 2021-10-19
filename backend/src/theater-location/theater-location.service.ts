import { Get, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { TheaterLocationDto } from './dto/create-theater-location.dto'
import {
  TheaterLocation,
  TheaterLocationDocument
} from './schemas/theater-location.schema'

@Injectable()
export class TheaterLocationService {
  constructor(
    @InjectModel(TheaterLocation.name)
    private theaterLoacationModel: Model<TheaterLocationDocument>
  ) {}

  async getAll(): Promise<TheaterLocation[]> {
    return this.theaterLoacationModel.find().exec()
  }

  async getById(id: string): Promise<TheaterLocation> {
    return this.theaterLoacationModel.findById(id)
  }

  async create(
    theaterLocationDto: TheaterLocationDto
  ): Promise<TheaterLocation> {
    const newTheaterLocation = new this.theaterLoacationModel(
      theaterLocationDto
    )
    return newTheaterLocation.save()
  }

  async remove(id: string) {}

  async update(id: string) {}
}

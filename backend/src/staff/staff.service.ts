import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { StaffDto } from './dto/staff.dto'
import { Staff, StaffDocument } from './schemas/staff.schema'

@Injectable()
export class StaffService {
  constructor(
    @InjectModel(Staff.name) private staffModel: Model<StaffDocument>
  ) {}

  async getAll(): Promise<Staff[]> {
    return this.staffModel.find().exec()
  }

  async getById(id: string): Promise<Staff> {
    return this.staffModel.findById(id)
  }

  async create(staffDto: StaffDto): Promise<Staff> {
    const newStaff = new this.staffModel(staffDto)
    return newStaff.save()
  }

  async remove(id: string) {}

  async update(id: string, staffDto: StaffDto) {}
}

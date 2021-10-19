import { TheaterLocation } from 'src/theater-location/schemas/theater-location.schema'

export class TheaterDto {
  readonly location: TheaterLocation
  readonly theaterCode: number
  readonly theaterName: string
  readonly theaterCreationDate: Date
}

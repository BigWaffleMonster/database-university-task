import { TheaterLocation } from 'src/theater-location/schemas/theater-location.schema'

export class TheaterDto {
  readonly location: TheaterLocation
  readonly theaterName: string
  readonly theaterCreationDate: Date
}

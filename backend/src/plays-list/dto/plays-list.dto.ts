import { Plays } from 'src/plays/schemas/plays.schema'

export class PlaysListDto {
  readonly listOfPlays: Plays[]
  readonly seasoneName: string
  readonly year: string
}

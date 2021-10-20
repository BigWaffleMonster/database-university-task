import { Plays } from 'src/plays/schemas/plays.schema'

export class PlaysListDto {
  readonly seasoneCode: number
  readonly listOfPlays: Plays[]
  readonly seasoneName: string
}

import { PlaysList } from 'src/plays-list/schemas/plays-list.schema'

export class PlaysScheduleListDto {
  readonly playsScheduleListCode: number
  readonly listOfPlays: PlaysList
  readonly playsScheduleListName: string
}

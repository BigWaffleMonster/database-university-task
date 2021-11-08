import { PlaysList } from 'src/plays-list/schemas/plays-list.schema'

export class PlaysScheduleListDto {
  readonly playsListRef: PlaysList
  readonly playsScheduleListName: string
}

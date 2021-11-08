import { PlaysScheduleList } from 'src/plays-schedule-list/schemas/plays-schedule-list.schema'
import { Staff } from 'src/staff/schemas/staff.schema'

export class TicketWindowDto {
  readonly ticketWindowNumber: number
  readonly cashierID: Staff
  readonly playsScheduleListCodeRef: PlaysScheduleList
  readonly isOpen: boolean
}

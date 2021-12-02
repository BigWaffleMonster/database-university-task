import { playType } from '../types/playType'
import { useState } from 'react'
import { cashierType } from '../types/cashierType'
import {scheduleType} from '../types/scheduleType'

export const useSchedule = () => {
  const [playsArr, setPlaysArr] = useState<playType[]>([])
  const [cashier, setCashier] = useState<cashierType>({ name: '', surname: '' })
  const [scheduleLists, setScheduleLists] = useState<scheduleType[]>([])
  const [plays, setPlays] = useState<playType[]>([])

  const getPlays = async (id: string) => {
    try {
      let response = await fetch(`http://localhost:5000/ticket-window/${id}`)
      let data = await response.json()

      response = await fetch(
        `http://localhost:5000/plays-schedule-list/${data.playsScheduleListCodeRef}`
      )
      data = await response.json()

      response = await fetch(
        `http://localhost:5000/plays-list/${data.playsListRef}`
      )
      data = await response.json()

      for (let playID of data.listOfPlays) {
        response = await fetch(`http://localhost:5000/plays/${playID}`)
        data = await response.json()
        setPlaysArr(prevState => {
          return [...prevState, data]
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  const getPlaysFromSchedule = async (id: string) => {
    try {
      let response = await fetch(`http://localhost:5000/plays-list/${id}`)
      let data = await response.json()

      console.log(data)
      for (let playID of data.listOfPlays) {
        response = await fetch(`http://localhost:5000/plays/${playID}`)
        data = await response.json()
        setPlays(prevState => {
          return [...prevState, data]
        })
      }
    } catch (e) {
      console.log(e)
    }
  }


  const getScheduleLists = async () => {
    try {
      let response = await fetch(`http://localhost:5000/plays-schedule-list`)
      let data = await response.json()

      setScheduleLists(data)

    } catch (e) {
      console.log(e)
    }
  }

  const getCashierInfo = async (id: string) => {
    try {
      let response = await fetch(`http://localhost:5000/ticket-window/${id}`)
      let data = await response.json()

      response = await fetch(`http://localhost:5000/staff/${data.cashierID[0]}`)
      data = await response.json()

      setCashier({ name: data.name, surname: data.surname })
    } catch (e) {
      console.log(e)
    }
  }

  const removePlayByAdmin = async (id: string) => {
    try {
      await fetch(`http://localhost:5000/plays/${id}`, {
        method: 'DELETE'
      })
    } catch (e) {
      console.log(e)
    }
  }

  return { getPlays, playsArr, plays, getCashierInfo, cashier, removePlayByAdmin, scheduleLists, getScheduleLists, getPlaysFromSchedule }
}

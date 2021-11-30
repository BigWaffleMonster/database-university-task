import { playType } from '../types/playType'
import { useState } from 'react'
import { cashierType } from '../types/cashierType'

export const useSchedule = () => {
  const [playsArr, setPlaysArr] = useState<playType[]>([])
  const [cashier, setCashier] = useState<cashierType>({ name: '', surname: '' })

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

  return { getPlays, playsArr, getCashierInfo, cashier, removePlayByAdmin }
}

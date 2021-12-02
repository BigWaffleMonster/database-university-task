import {useState} from 'react'
import {fullCashierInfo} from '../types/cashierType'

export const useCashiers = () => {
  const [cashiers, setCashiers] = useState<fullCashierInfo[]>()

  const getCashiers = async () => {
    try {
      const response = await fetch(`http://localhost:5000/staff`)
      const data = await response.json()

      setCashiers(data)
    } catch (e) {
      console.log(e)
    }
  }

  return { cashiers, getCashiers }
}

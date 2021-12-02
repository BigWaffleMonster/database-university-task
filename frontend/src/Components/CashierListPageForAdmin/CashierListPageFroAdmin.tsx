import React, {useEffect} from 'react'
import {useCashiers} from '../../hooks/useCashiers'
import CashierList from './CashierList'

const CashierListPageFroAdmin = () => {
  const {cashiers, getCashiers} = useCashiers()

  useEffect(() => {
    getCashiers()
  })

  return (
    <div>
      <h1>Cashiers List</h1>
      <CashierList cashiers={cashiers}/>
    </div>
  )
}

export default CashierListPageFroAdmin
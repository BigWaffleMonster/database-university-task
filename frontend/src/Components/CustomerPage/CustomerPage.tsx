import React, {useEffect, useState} from 'react'
import PlaysScheduleList from '../PlaysScheduleList'
import styles from './customerPage.module.scss'
import {useSchedule} from '../../hooks/useSchedule'
import {playType} from '../../types/playType'
import {useTickets} from '../../hooks/useTickets'

const CustomerPage = () => {
  const {getPlays, playsArr, getCashierInfo, cashier} = useSchedule()
  const {buyTicket, getTicket, ticket} = useTickets()

  const [plays, setPlays] = useState<playType[]>([])
  const [amountTicketsToBuy, setAmountTicketsToBuy] = useState<number>(0)

  useEffect(() => {
    const handleReq = async () => {
      await getPlays('6179295d203312e09fc754a2')
      await getCashierInfo('6179295d203312e09fc754a2')
      setPlays(playsArr)
    }
    handleReq()
  }, [])

  useEffect(() => {
    const handleReq = async () => {
      await getTicket('6179295d203312e09fc754a2')
    }
    handleReq()
  }, [ticket])

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmountTicketsToBuy(parseInt(event.target.value))
  }

  return (
    <div className={styles.container}>
      <h1>Cashier: {cashier.name} {cashier.surname}</h1>

      <PlaysScheduleList plays={plays}/>

      <h1>{`Tickets: ${ticket}`}</h1>

      <input
        type="text"
        placeholder={amountTicketsToBuy.toString()}
        value={amountTicketsToBuy}
        onChange={changeHandler}
      />

      <button className={styles.btn} onClick={() => buyTicket('6179295d203312e09fc754a2',  ticket - amountTicketsToBuy)}>Buy ticket</button>
    </div>
  )
}

export default CustomerPage
import React, {useEffect, useState} from 'react'
import styles from './cashierPage.module.scss'
import PlaysScheduleList from '../PlaysScheduleList'
import {useSchedule} from '../../hooks/useSchedule'
import {useTickets} from '../../hooks/useTickets'
import {playType} from '../../types/playType'

const CashierPage = () => {
  const {getPlays, playsArr} = useSchedule()
  const {getTicket, addTicket, ticket} = useTickets()

  const [plays, setPlays] = useState<playType[]>([])
  const [amountTicketsToAdd, setAmountTicketsToAdd] = useState<number>(0)

  useEffect(() => {
    const handleReq = async () => {
      await getPlays('6179295d203312e09fc754a2')
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
    setAmountTicketsToAdd(parseInt(event.target.value))
  }

  return (
      <div className={styles.container}>
        <PlaysScheduleList plays={plays}/>

        <h1>{`Tickets: ${ticket}`}</h1>

        <input
          type="text"
          placeholder={amountTicketsToAdd.toString()}
          value={amountTicketsToAdd}
          onChange={changeHandler}
        />

        <button className={styles.btn} onClick={() => addTicket('6179295d203312e09fc754a2',  ticket + amountTicketsToAdd)}>Add tickets</button>
      </div>
  )
}

export default CashierPage
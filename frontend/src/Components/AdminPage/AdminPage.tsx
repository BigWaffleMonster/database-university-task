import React, { useEffect, useState } from 'react'
import { useSchedule } from '../../hooks/useSchedule'
import { playType } from '../../types/playType'
import PlaysScheduleListForAdmin from '../PlaysScheduleListForAdmin'

import styles from './adminPage.module.scss'

const AdminPage = () => {
  const { getPlays, playsArr } = useSchedule()

  const [plays, setPlays] = useState<playType[]>([])

  useEffect(() => {
    const handleReq = async () => {
      await getPlays('6179295d203312e09fc754a2')
      setPlays(playsArr)
    }
    handleReq()
  }, [])

  return (
    <div className={styles.container}>
      <PlaysScheduleListForAdmin plays={plays} />
      <h1>Q</h1>
    </div>
  )
}

export default AdminPage

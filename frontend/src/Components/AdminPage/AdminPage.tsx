import React, { useEffect } from 'react'
import { useSchedule } from '../../hooks/useSchedule'
import PlaysScheduleListForAdmin from '../PlaysScheduleListForAdmin'

import styles from './adminPage.module.scss'

const AdminPage = () => {
  const { getPlays, playsArr } = useSchedule()

  useEffect(() => {
    const handleReq = async () => {
      await getPlays('6179295d203312e09fc754a2')
    }
    handleReq()
  }, [])

  return (
    <div className={styles.container}>
      <PlaysScheduleListForAdmin plays={playsArr} />
    </div>
  )
}

export default AdminPage

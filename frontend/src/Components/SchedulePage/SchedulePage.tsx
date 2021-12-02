import React, {useEffect} from 'react'
import {useSchedule} from '../../hooks/useSchedule'
import styles from './schedulePage.module.scss'
import ScheduleList from './ScheduleList'

const SchedulePage = () => {
  const {getScheduleLists, scheduleLists} = useSchedule()

  useEffect(() => {
    getScheduleLists()
  }, [])

  return (
    <div className={styles.container}>
      <ScheduleList scheduleLists={scheduleLists} />
    </div>
  )
}

export default SchedulePage
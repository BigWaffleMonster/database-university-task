import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSchedule} from '../../hooks/useSchedule'
import PlaysList from './PlaysList'
import styles from './schedule.module.scss'

const Schedule = () => {
  const {id} = useParams()
  const {getPlaysFromSchedule, plays} = useSchedule()

  useEffect(() => {
    getPlaysFromSchedule(id as string)
  }, [])

  return (
    <div className={styles.container}>
      <PlaysList plays={plays} />
    </div>
  )
}

export default Schedule
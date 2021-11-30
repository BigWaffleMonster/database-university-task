import React, {useEffect} from 'react'
import styles from './playsPage.module.scss'
import PlaysListPage from '../PlaysListPage'
import {usePlays} from '../../hooks/usePlays'

const PlaysPage = () => {
  const {plays, getPlays} = usePlays()

  useEffect(() => {
    const handleReq = async () => {
      await getPlays()
    }
    handleReq()
  }, [])

  return (
    <div className={styles.container}>
      <PlaysListPage plays={plays} />
    </div>
  )
}

export default PlaysPage
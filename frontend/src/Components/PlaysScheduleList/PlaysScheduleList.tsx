import React, { FC } from 'react'
import styles from './playsScheduleList.module.scss'
import { propsTypes } from './types'
import { setDateTimeToNormalView } from '../../helperFunctions/setDateTimeToNormalView'

const PlaysScheduleList: FC<propsTypes> = (props) => {
  return (
    <div className={styles.container}>
      <h1>Schedule Title</h1>
      <div className={styles.gridContainer}>
        <div className={styles.item}>
          <h4>Play Name</h4>
        </div>
        <div className={styles.item}>
          <h4>Date and time of play</h4>
        </div>
        <div className={styles.item}>
          <h4>Genre</h4>
        </div>
        {props.plays.map((pl: any) => {
          return (
            <>
              <div className={styles.item} key={pl._id}>
                {pl.playName}
              </div>
              <div className={styles.item} key={pl._id + 1}>
                {setDateTimeToNormalView(pl.dateAndTimeOfPlay)}
              </div>
              <div className={styles.item} key={pl._id + 2}>
                {pl.genre}
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default PlaysScheduleList

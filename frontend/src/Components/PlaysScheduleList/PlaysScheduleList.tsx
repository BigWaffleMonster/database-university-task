import React, {FC} from 'react'
import styles from './playsScheduleList.module.scss'
import {propsTypes} from './types'
import {setDateTimeToNormalView} from '../../helperFunctions/setDateTimeToNormalView'

const PlaysScheduleList: FC<propsTypes> = (props) => {
  return (
    <div className={styles.container}>
      <h1>Schedule Title</h1>
      <div className={styles.gridContainer}>
        <div className={styles.item}>Play Name</div>
        <div className={styles.item}>Date and time of play</div>
        <div className={styles.item}>Genre</div>
        {props.plays.map((pl: any) => {
          return (
            <>
              <div className={styles.item} key={pl._id}>{pl.playName}</div>
              <div className={styles.item} key={pl._id + 1}>{setDateTimeToNormalView(pl.dateAndTimeOfPlay)}</div>
              <div className={styles.item} key={pl._id + 2}>{pl.genre}</div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default PlaysScheduleList
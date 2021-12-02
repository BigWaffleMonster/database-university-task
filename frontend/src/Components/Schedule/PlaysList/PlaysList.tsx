import React, {FC} from 'react'
import {propsTypes} from './type'
import styles from './playsListPage.module.scss'
import {setDateTimeToNormalView} from '../../../helperFunctions/setDateTimeToNormalView'

const PlaysList: FC<propsTypes> = (props) => {
  return (
    <div className={styles.container}>
      <h1>Plays List</h1>
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
        <div className={styles.item}>
          <h4>Genre Rating</h4>
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
              <div className={styles.item} key={pl._id + 3}>
                {pl.genreRating}
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default PlaysList
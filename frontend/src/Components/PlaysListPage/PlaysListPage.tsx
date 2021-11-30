import React, {ChangeEvent, FC, useState} from 'react'
import styles from './playsListPage.module.scss'
import { propsTypes } from './types'
import { setDateTimeToNormalView } from '../../helperFunctions/setDateTimeToNormalView'
import { useSchedule } from '../../hooks/useSchedule'
import {playTypeForUpdate} from '../../types/playType'
import {defaultPlayData} from './initValues'
import {usePlays} from '../../hooks/usePlays'
import UpdatePlayPage from '../UpdatePlayPage/UpdatePlayPage'


const PlaysListPage: FC<propsTypes> = (props) => {
  const {removePlayByAdmin} = useSchedule()
  const {addPlay} = usePlays()

  const [playsData, setPlaysData] = useState<playTypeForUpdate>(defaultPlayData)

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPlaysData({...playsData, [e.target.name]: e.target.value})
  }

  return (
    <>
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
          <div className={styles.item}>
            <h4>Update/Delete</h4>
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

                <div className={styles.item} key={pl._id + 4}>
                  <button onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    history.pushState(null, '', `/plays/${pl._id}`)
                    window.location.reload()
                  }}>
                    Update
                  </button>
                  <button onClick={() => removePlayByAdmin(pl._id)}>
                    Delete
                  </button>
                </div>
              </>
            )
          })}
        </div>
      </div>

      <div className={styles.addContainer}>
        <input
          name='playName'
          placeholder='Play name'
          value = {playsData.playName}
          onChange={inputHandler}
        />
        <input
          type='datetime-local'
          name='dateAndTimeOfPlay'
          value={playsData.dateAndTimeOfPlay.toUTCString()}
          onChange={inputHandler}
        />
        <input
          name='genre'
          placeholder='Genre'
          value={playsData.genre}
          onChange={inputHandler}
        />
        <input
          name='genreRating'
          onChange={inputHandler}
          value={playsData.genreRating} />
        <button onClick={() => addPlay(playsData)}>Add play</button>
      </div>
    </>
  )
}

export default PlaysListPage

import React, {ChangeEvent, FC, useEffect, useState} from 'react'
import styles from './updatePlayPage.module.scss'
import {defaultPlayData} from './initValues'
import {usePlays} from '../../hooks/usePlays'
import {useParams} from 'react-router-dom'

const UpdatePlayPage: FC = () => {
  const {updatePlayByID} = usePlays()
  const {id} = useParams()

  const [playsData, setPlaysData] = useState(defaultPlayData())

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPlaysData({...playsData, [e.target.name]: e.target.value})
  }

  return (
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
      <button onClick={() => updatePlayByID(id as string, playsData)}>Update play</button>
    </div>
  )
}

export default UpdatePlayPage
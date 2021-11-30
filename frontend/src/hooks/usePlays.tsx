import {playType, playTypeForUpdate} from '../types/playType'
import {useState} from 'react'

export const usePlays = () => {
  const [plays, setPlays] = useState<playType[]>([])
  const [play, setPlay] = useState()

  const getPlays = async () => {
    try {
      const response = await fetch(`http://localhost:5000/plays`)
      const data = await response.json()

      setPlays(data)
    } catch (e) {
      console.log(e)
    }
  }

  const getPlayByID = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/plays/${id}`)
      const data = await response.json()

      setPlay(data)
    } catch (e) {
      console.log(e)
    }
  }

  // @ts-ignore
  const updatePlayByID = async (id: string, body) => {
    try {
      const response = await fetch(`http://localhost:5000/plays/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
      })
      const data = await response.json()
    } catch (e) {
      console.log(e)
    }
  }

  const addPlay = async (play: playTypeForUpdate) => {
    try {
      const response = await fetch(`http://localhost:5000/plays`, {
        method: 'POST',
        body: JSON.stringify(play),
        headers: {'Content-Type': 'application/json'}
      })
      console.log(play)
      const data = await response.json()

      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }

  return { addPlay, getPlays, plays, play, getPlayByID, updatePlayByID }
}

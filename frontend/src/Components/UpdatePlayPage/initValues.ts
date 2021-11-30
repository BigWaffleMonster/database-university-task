import {playType} from '../../types/playType'

export const defaultPlayData = () => {
  return (
    {
      playName: '',
      genre: '',
      dateAndTimeOfPlay: new Date(),
      genreRating: 0
    }
  )
}
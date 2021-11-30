export type playType = {
  _id: string,
  playName: string,
  genre: string,
  dateAndTimeOfPlay: Date,
  genreRating: number
}

export type playTypeForUpdate = {
  playName: string,
  genre: string,
  dateAndTimeOfPlay: Date,
  genreRating: number
}

import React from "react"
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti"

function RatingStars({ Review_Count = 0, Star_Size = 20 }) {
  const rating = Number(Review_Count) || 0

  const full = Math.floor(rating)
  const half = rating % 1 !== 0 ? 1 : 0 
  const empty = 5 - full - half

  return (
    <div className="flex gap-1 text-yellow-100">
      {[...Array(full)].map((_, i) => (
        <TiStarFullOutline key={`f-${i}`} size={Star_Size} />
      ))}
      {[...Array(half)].map((_, i) => (
        <TiStarHalfOutline key={`h-${i}`} size={Star_Size} />
      ))}
      {[...Array(empty)].map((_, i) => (
        <TiStarOutline key={`e-${i}`} size={Star_Size} />
      ))}
    </div>
  )
}

export default RatingStars


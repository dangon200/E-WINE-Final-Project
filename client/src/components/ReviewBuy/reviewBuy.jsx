import { UseSelector } from 'react-redux'
import React, { UseState } from 'react'
import { FaStart } from 'react-icons/fa'

export default function reviewBuy (publicationId) {
  const review = UseSelector(state => state.reviewBuy)
  const { rating, setRating } = UseState(null)
  const { hover, setHover } = UseState(null)
  console.log(review)
  return (
    <div>
      {[...Array].map((star, i) => {
        const starRating = i + 1
        return (
          <label key>
            <input
              type='radio'
              name='rating'
              value={starRating}
              onClick={() => setRating(starRating)}
            />
            <FaStart
              className='star'
              size={100} key
              onMouseEnter={() => setHover(starRating)}
              onMouseLeave={() => setHover(null)}
              color={starRating > (hover || rating) ? '#ffc107' : '#e4e5e9'}
            />
          </label>
        )
      })}
    </div>
  )
}

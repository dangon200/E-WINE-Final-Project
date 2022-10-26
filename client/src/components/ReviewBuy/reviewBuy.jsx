import { UseSelector } from 'react-redux'

export default function reviewBuy (publicationId) {
  const review = UseSelector(state => state.reviewBuy)
  console.log(review)
  return (
    <div />
  )
}

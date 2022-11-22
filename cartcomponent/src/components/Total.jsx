import React from 'react'

export default function Total(props) {
  const {total}=props
  return (
    <div>
      <h2>{`Total : ₹ ${total}`}</h2>
    </div>
  )
}

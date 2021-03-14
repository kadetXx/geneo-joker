import React from 'react'

function TwoPart({ setup, delivery }) {
  return (
    <div className='joke__twopart'>
      <p> {setup} </p>
      <p> {delivery} </p>
    </div>
  )
}

export default TwoPart

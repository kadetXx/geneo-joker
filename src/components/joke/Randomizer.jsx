import React from 'react'

function Randomizer( {getJoke} ) {

  return (
    <div className='randomizer'>
      <button className='btn-big' onClick={() => getJoke()}>Random Joke</button>
    </div>
  )
}

export default Randomizer

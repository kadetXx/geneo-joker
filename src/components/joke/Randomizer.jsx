import React from 'react'

function Randomizer( {getJoke} ) {

  return (
    <div className='randomizer'>
      <button onClick={() => getJoke()}>Random Joke</button>
    </div>
  )
}

export default Randomizer

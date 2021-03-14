import React from 'react'
import PropTypes from 'prop-types'

function Randomizer( {getJoke} ) {

  return (
    <div className='randomizer'>
      <button className='btn-big' onClick={() => getJoke()}>Random Joke</button>
    </div>
  )
}

export default Randomizer

Randomizer.propTypes = {
  getJoke: PropTypes.func.isRequired,
};
import React from 'react'
import PropTypes from 'prop-types'

function TwoPart({ setup, delivery }) {
  return (
    <div className='joke__twopart'>
      <p> {setup} </p>
      <p> {delivery} </p>
    </div>
  )
}

export default TwoPart

TwoPart.propTypes = {
  setup: PropTypes.string.isRequired,
  delivery: PropTypes.string
};
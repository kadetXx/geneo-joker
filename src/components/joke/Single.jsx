import React from 'react'
import PropTypes from 'prop-type'

function Single({ joke }) {
  return (
    <div className='joke__single'>
      <p> {joke} </p>
    </div>
  )
}

export default Single

Single.propTypes = {
  joke: PropTypes.string.isRequired,
};
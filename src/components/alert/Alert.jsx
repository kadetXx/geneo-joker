import React from 'react'
import PropTypes from 'prop-types'

function Alert({ message }) {
  return (
    <div className='alert'>
      <i className="fas fa-exclamation-circle"></i>
      <p> {message} </p>
    </div>
  )
}

export default Alert

Alert.propTypes = {
  message: PropTypes.string.isRequired
}

Alert.defaultProps = {
  message: 'Oops, An unexpected error occured, try again.'
}

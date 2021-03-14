import React from 'react'

import Loader from '../../assets/svg/loading.svg'

function Loading() {
  return (
    <div className='loader'>
      <img src={Loader} alt="loading gif"/>
    </div>
  )
}

export default Loading

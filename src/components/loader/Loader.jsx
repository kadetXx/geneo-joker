import React from 'react'

import LoadingGif from '../../assets/svg/loading.svg'

function Loader() {
  return (
    <div className='loader'>
      <img src={LoadingGif} alt="loading gif"/>
    </div>
  )
}

export default Loader

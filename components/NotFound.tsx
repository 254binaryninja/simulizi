import React from 'react'
import Animation from '../public/animations/Data.json'
import Lottie from 'lottie-react'

const NotFound = () => {
  return (
    <div className="p-5 m-5">
      <Lottie animationData={Animation} size={500}/> 
    </div>
  )
}

export default NotFound

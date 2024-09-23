'use client'

import Intro from '@/components/landing/Intro'
import Landing from '@/components/landing/Landing'
import React, { useState } from 'react'

const Home = () => {
  const [intro,setIntro] = useState<boolean>(true)
   setTimeout(()=>{
    setIntro(false)
   },3000)
  return (
    <div>
      {intro? <Intro/>:<Landing />}
    </div>
  )
}

export default Home

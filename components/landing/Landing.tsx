'use client'

import React from 'react'
import Lottie from 'lottie-react'
import AnimationData from '../../public/animations/story.json'
import Image from 'next/image'
import { Separator } from '../ui/separator'
import { cardItems } from '@/constants'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { CircleUser,UserPlus } from 'lucide-react'

const Landing = () => {

    const router = useRouter()
  return (
    <div className='flex flex-col'>
       <div className='left-0 top-0 m-5 p-5'>
         <div className='flex flex-row gap-10'>
            <Image
             src="/images/logo.webp"
             alt="Logo"
             width={50}
             height={50}
            />
            <h1 className="text-5xl font-extrabold text-black max-sm:text-3xl">Simulizi Tales</h1>
         </div>
       </div>
       <div className="flex flex-row gap-32 max-sm:gap-20 max-sm:flex-wrap max-md:flex-wrap">
         <div className=''>
           <Lottie
            animationData={AnimationData}
            size={300}
           />
         </div>
         <div className='m-5 p-7 flex flex-col gap-6'>
          <p className='text-gray-400 font-semibold text-2xl'>
            Simulizi Tales in an AI powered application that generates kids storybooks based on the
            criteria you choose namely <strong>age,story type and theme </strong> and also a description based on what you
            will want the story to play out.
          </p>
          <Separator color='black'/>
          <h1 className='text-black font-medium text-xl'>It works in these steps</h1>
          <div className="grid  gap-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4">
            {cardItems.map((item,i)=>(
                <div key={i} className="z-10 flex flex-col gap-5 bg-slate-50 px-3 py-4 hover:opacity-80 rounded-lg">
                   <h1 className="text-green-600 font-bold text-xl">{item.label}</h1>
                   <p className="text-black font-medium text-sm">{item.content}</p>
                </div>
            ))}
          </div>
          <div className="flex flex-row gap-3">
             <Button className='text-white flex flex-row gap-2 p-2 bg-green-600 hover:bg-green-700' >
               <CircleUser/>
               Login
             </Button>
             <Button className='text-white flex flex-row gap-2 p-2 bg-green-600 hover:bg-green-700' >
               <UserPlus/>
                Sign Up
             </Button>
          </div>
         </div>
       </div>
    </div>
  )
}

export default Landing

'use client'

import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { BotIcon } from 'lucide-react'
import PaymentButton from '@/components/Button'
import MobileNav from '@/components/MobileNav'
import { UserButton } from '@clerk/nextjs'



const page = () => {
 const [isScrolled,setIsScrolled] = useState<boolean>(false)
 const router = useRouter()

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 0) {
                setIsScrolled(true)
            }else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll',handleScroll)
        return ()=> window.removeEventListener('scroll',handleScroll)
    },[])

  return (
   <div className={cn('flex-between sticky z-10 left-0 top-0 right-0 px-6 py-4 lg:px-10',{
    "glassmorphism":isScrolled,
    "bg-transparent":!isScrolled
   })}>
      <div className='flex items-center gap-1 p-2'>
         <Image
          src="/images/logo.webp"
          alt="Simulizi logo"
          width={50}
          height={50}
         />
          <p className='font-extrabold text-[26px] text-black p-5  max-sm:hidden'>Simulizi Tales</p>
      </div>

      <div className='p-3 sm:hidden'>
         <MobileNav/>
       </div>
       
      <div className="flex flex-row gap-3 max-sm:hidden">
       <Button className="flex flex-row gap-2 p-7" onClick={()=>router.push('/generate')}>
        <BotIcon/>
        Generate
       </Button>
       <PaymentButton
        title='Buy Credits'
       />
      </div>
      <UserButton/>
   </div>
  )
}

export default page

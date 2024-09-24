import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react'
import { useRouter } from 'next/navigation'  

const MobileNav = () => {

    const router = useRouter()

  return (
<DropdownMenu>
  <DropdownMenuTrigger><Menu/></DropdownMenuTrigger>
  <DropdownMenuContent className='glassmorphism'>
    <DropdownMenuLabel className="font-extrabold text-2xl">Simulizi Tales</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={()=>router.push('/generate')}>Generate</DropdownMenuItem>
    <DropdownMenuItem onClick={()=>router.push('/buy-credit')}>Buy Credits</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  )
}

export default MobileNav

import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className="flex flex-row gap-40">
      <div className=''>
        <Image
          src="/images/IMG_2.jpg"
          alt="Image"
          width={700}
          height={900}
          className='min-h-screen max-sm:hidden'
        />
      </div>
    </div>
  )
}

export default page

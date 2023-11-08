'use client'

import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

const LocalSearch = () => {
  return (
    <div className="background-light800_darkgradient flex min-h-[56px] w-full grow items-center gap-4 rounded-xl px-4">
      <Image
        src="/assets/icons/search.svg"
        alt="Search"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder="Search questions..."
        value=""
        onChange={() => {
          console.log('searching...')
        }}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />
    </div>
  )
}

export default LocalSearch

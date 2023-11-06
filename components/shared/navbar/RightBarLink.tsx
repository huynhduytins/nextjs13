import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import link from 'next/link'

interface IRightBarLink {
  description: string
  link: string
  views?: string
}

const RightBarLink = ({ description, link, views }: IRightBarLink) => {
  return (
    <>
      {views ? (
        <Link href={link} className="flex items-center justify-between">
          <Button className="rounded-[6px] bg-light-800 px-4 py-2 text-[10px] font-medium uppercase">
            {description}
          </Button>
          <p className="text-sm font-medium">{views}</p>
        </Link>
      ) : (
        <Link href={link} className="flex items-start justify-between">
          <p className="max-w-[248px] text-sm font-medium">{description}</p>
          <Image
            src="assets/icons/chevron-right.svg"
            alt="arrow"
            width={20}
            height={20}
            className="invert-colors"
          />
        </Link>
      )}
    </>
  )
}

export default RightBarLink

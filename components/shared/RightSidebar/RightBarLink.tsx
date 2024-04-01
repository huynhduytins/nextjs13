import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Tag from '../Tag'

interface RightBarLinkProps {
  description: string
  link: string
  views?: string
}

const RightBarLink = ({ description, link, views }: RightBarLinkProps) => {
  return (
    <>
      {views ? (
        <Link href={link} className="flex items-center justify-between">
          <Tag>{description}</Tag>
          <p className="text-sm font-medium dark:text-light-700">{views}</p>
        </Link>
      ) : (
        <Link href={link} className="flex items-start justify-between">
          <p className="max-w-[248px] text-sm font-medium dark:text-light-700">
            {description}
          </p>
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

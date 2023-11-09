'use client'

import { Button } from '@/components/ui/button'
import React from 'react'

interface HomeFilterProps {
  filters: { value: string; name: string }[]
}

const HomeFilter = ({ filters }: HomeFilterProps) => {
  const active = filters[0].value

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          onClick={() => {}}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            active === filter.value
              ? 'bg-primary-100'
              : 'bg-light-800 text-light-500  dark:bg-dark-300 dark:text-light-500'
          }`}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  )
}

export default HomeFilter

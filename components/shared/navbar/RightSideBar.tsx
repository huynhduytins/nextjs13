import React from 'react'
import { HOT_NETWORKS, HOT_TAGS } from '@/constants'
import RightBarLink from './RightBarLink'

const RightSideBar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col overflow-y-auto border-r p-6 pt-36 leading-4 shadow-light-300 dark:shadow-none max-lg:hidden lg:w-[300px]">
      <div>
        <h2 className="mb-[26px] text-xl font-bold">Top Question</h2>
        <ul className="flex flex-col gap-[30px]">
          {HOT_NETWORKS.map((network) => (
            <li key={network.link}>
              <RightBarLink
                description={network.description}
                link={network.link}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-14">
        <h2 className="mb-[26px] text-xl font-bold">Popular Tags</h2>
        <ul className="flex flex-col gap-[30px]">
          {HOT_TAGS.map((tag) => (
            <li key={tag.tag}>
              <RightBarLink
                description={tag.tag}
                views={tag.views}
                link={tag.link}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default RightSideBar

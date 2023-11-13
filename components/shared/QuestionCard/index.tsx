import React from 'react'
import Tag from '../Tag'
import Image from 'next/image'

const tags = ['javascript', 'html', 'css', 'reactjs']

export interface QuestionCardProps {
  _id: string
  title: string
  tags: { _id: string; name: string }[]
  author: {
    _id: string
    name: string
    avatar: string
  }
  upVotes: number
  views: number
  answers: Array<object>
  createdAt: Date
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upVotes,
  views,
  answers,
  createdAt,
}) => {
  return (
    <div className="flex min-h-[209px] flex-col gap-7 rounded-[10px] border px-[45px] py-[36px] shadow-light-300">
      <div>
        <p className="hidden text-xs font-normal max-sm:flex">2 mins ago</p>
        <h2 className="line-clamp-1 text-xl font-semibold leading-6">
          The Lightning Component c:LWC_PizzaTracker generated invalid output
          for field status. Error How to solve this
        </h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="flex flex-col justify-between gap-2 leading-5 max-sm:flex-row max-[530px]:flex-col md:flex-row">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/site-logo.svg"
            alt="author"
            width={20}
            height={20}
            className="rounded-full"
          />
          <h3 className="text-sm font-semibold">Patheon</h3>
          <p className="text-xs font-normal max-sm:hidden">
            &#x2022; asked 2 mins ago
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs font-medium">
          <div className="flex items-center">
            <Image
              src="/assets/icons/like.svg"
              alt="like"
              width={20}
              height={20}
            />
            <p>54 Votes</p>
          </div>
          <div className="flex items-center ">
            <Image
              src="/assets/icons/message.svg"
              alt="message"
              width={20}
              height={20}
            />
            <p>30 Answers</p>
          </div>
          <div className="flex items-center ">
            <Image
              src="/assets/icons/eye.svg"
              alt="eye"
              width={20}
              height={20}
            />
            <p>2.7K Views</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard

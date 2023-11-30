import React from 'react'
import Tag from '../Tag'
import Link from 'next/link'
import Metric from '../Metric'
import { formatNumber, getTimestamp } from '@/lib/utils'

export interface QuestionCardProps {
  _id: string
  title: string
  tags: { _id: string; name: string }[]
  author: {
    _id: string
    name: string
    avatar: string
  }
  upVotes: string[]
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
}: QuestionCardProps) => {
  return (
    <div className="card-wrapper p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag._id}>{tag.name}</Tag>
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          title={` - asked ${getTimestamp(createdAt)}`}
          imgUrl="/assets/icons/avatar.svg"
          alt="user"
          value={author.name}
          href={`/profile/${author._id}`}
          isAuthor
          textStyles="body-medium tex-dark400_light700"
        />
        <Metric
          title="Votes"
          imgUrl="/assets/icons/like.svg"
          alt="UpVotes"
          value={formatNumber(upVotes?.length || 0)}
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          title="Answers"
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={formatNumber(answers?.length || 0)}
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          title="Views"
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatNumber(views)}
          textStyles="small-medium text-dark400_light800"
        />
      </div>
    </div>
  )
}

export default QuestionCard

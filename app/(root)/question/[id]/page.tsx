import Metric from "@/components/shared/Metric"
import { getQuestonById } from "@/lib/actions/question.action"
import { formatNumber, getTimestamp } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Page = async ({ params, searchParams }: any) => {
  const result = await getQuestonById({ questionId: params.id })

  return (
    <>
      <div className="flex-start w-full flex-col">
        <div className="flex w-full flex-col-reverse sm:justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
          <Link
            href={`/profile/${result.author.clerkId}`}
            className="flex justify-center gap-1"
          >
            <Image
              src="data:image/jpeg;base64,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"
              alt="author picture"
              className="rounded-full"
              width={22}
              height={22}
            />
            <p className="paragraph-semibold text-dark300_light700">
              {result.author.name}
            </p>
          </Link>
          <div className="flex gap-3">
            <div className="flex gap-[6px] items-center">
              <Image
                src="/assets/icons/upvote.svg"
                alt="upvote"
                width={19}
                height={19}
                className="cursor-pointer"
              />
              <p className="px-2 py-1 small-medium bg-light-700 rounded-md leading-normal">
                {formatNumber(result.upvotes.length || 0)}
              </p>
            </div>
            <div className="flex gap-[6px] items-center">
              <Image
                src="/assets/icons/downvote.svg"
                alt="downvote"
                width={19}
                height={19}
                className="cursor-pointer"
              />
              <p className="px-2 py-1 small-medium bg-light-700 rounded-md leading-normal">
                {result.downvotes.length
                  ? `-${formatNumber(result.downvotes.length)}`
                  : 0}
              </p>
            </div>
            <Image
              src="/assets/icons/star-red.svg"
              alt="star"
              width={19}
              height={19}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full mt-4">
          <h2 className="h2-semibold">{result.title}</h2>
        </div>
        <div className="w-full mt-5 flex justify-start gap-4">
          <Metric
            title={`Asked ${getTimestamp(result.createdAt)}`}
            imgUrl="/assets/icons/clock-2.svg"
            alt="time"
            value={""}
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            title="Votes"
            imgUrl="/assets/icons/like.svg"
            alt="UpVotes"
            value={formatNumber(result.upvotes?.length || 0)}
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            title="Answers"
            imgUrl="/assets/icons/message.svg"
            alt="message"
            value={formatNumber(result.answer?.length || 0)}
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            title="Views"
            imgUrl="/assets/icons/eye.svg"
            alt="eye"
            value={formatNumber(result.views)}
            textStyles="small-medium text-dark400_light800"
          />
        </div>
        <div>
          <p>
            When the user clicks a button for the first time, a spinner is
            displayed, the "close" button is disabled, and a modal popup is
            shown. When the user clicks on a table displayed within the modal
            popup, the table loads data. When the user closes the popup by
            clicking the "close" button, and then clicks the same button again
            without refreshing the page, the data in the table should be the
            same as it was before. I need it so that when the user clicks the
            button, any changes made stay in place even after closing and
            reopening the popup.
          </p>
        </div>
      </div>
    </>
  )
}

export default Page

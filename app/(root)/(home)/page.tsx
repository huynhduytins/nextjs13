import Filter from '@/components/shared/Filter'
import HomeFilter from '@/components/shared/Filter/HomeFilter'
import NoResult from '@/components/shared/NoResult'
import QuestionCard from '@/components/shared/QuestionCard'
import LocalSearch from '@/components/shared/search/LocalSearch'
import { Button } from '@/components/ui/button'
import { HomePageFilters } from '@/constants'
import { getQuestions } from '@/lib/actions/question.action'
import Link from 'next/link'

export default async function Home() {
  const questions = await getQuestions({})

  return (
    <>
      <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center md:flex-col md:items-start md:gap-0">
        <LocalSearch
          route=""
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClass="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          containerClasses="hidden max-md:flex"
          otherClass="min-h-[56px] sm:min-w-[170px]"
        />
        <HomeFilter filters={HomePageFilters} />
      </div>
      <div className="mt-10 flex flex-col gap-6">
        {questions ? (
          questions.map((question) => (
            <QuestionCard
              _id={question._id}
              answers={question.answers}
              author={question.author}
              createdAt={question.createdAt}
              tags={question.tags}
              title={question.title}
              upVotes={question.upVotes}
              views={question.views}
              key={question._id}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡"
            linkTitle="Ask a Question"
            link="/ask-question"
          />
        )}
      </div>
    </>
  )
}

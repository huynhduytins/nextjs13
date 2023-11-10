import Filter from '@/components/shared/Filter'
import HomeFilter from '@/components/shared/Filter/HomeFilter'
import QuestionCard from '@/components/shared/QuestionCard'
import LocalSearch from '@/components/shared/Search/LocalSearch'
import { Button } from '@/components/ui/button'
import { HomePageFilters } from '@/constants'
import Link from 'next/link'

export default function Home() {
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
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
    </>
  )
}

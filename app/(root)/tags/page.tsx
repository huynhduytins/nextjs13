import TagCard from "@/components/card/TagCard"
import Filter from "@/components/shared/Filter"
import HomeFilter from "@/components/shared/Filter/HomeFilter"
import NoResult from "@/components/shared/NoResult"
import LocalSearch from "@/components/shared/search/LocalSearch"
import { TagFilters } from "@/constants/filter"
import { getAllTags } from "@/lib/actions/tag.action"
import React from "react"

const Page = async () => {
  const result = await getAllTags({})
  console.log(result)
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Users</h1>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center md:flex-col md:items-start md:gap-0">
        <LocalSearch
          route=""
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search by tag name..."
          otherClass="flex-1"
        />
        <Filter
          filters={TagFilters}
          containerClasses="hidden max-md:flex"
          otherClass="min-h-[56px] sm:min-w-[170px]"
        />
        <HomeFilter filters={TagFilters} />
      </div>
      <section className="mt-12 flex flex-wrap gap-4">
        {result.tags.length > 0 ? (
          result.tags.map((tap) => <TagCard />)
        ) : (
          <NoResult
            title="No Tags Found"
            description="It look like there are no tags found."
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </section>
    </>
  )
}

export default Page

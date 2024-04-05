import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/Filter";
import HomeFilter from "@/components/shared/Filter/HomeFilter";

import { UserFilters } from "@/constants/filter";
import { getAllUser } from "@/lib/actions/user.action";
import Link from "next/link";
import UserCard from "@/components/card/UserCard";

const Page = async () => {
  const result = await getAllUser({});
  console.log(result)

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Users</h1>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center md:flex-col md:items-start md:gap-0">
        <LocalSearch
          route=""
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search by Username..."
          otherClass="flex-1"
        />
        <Filter
          filters={UserFilters}
          containerClasses="hidden max-md:flex"
          otherClass="min-h-[56px] sm:min-w-[170px]"
        />
        <HomeFilter filters={UserFilters} />
      </div>
      <section className="mt-12 flex flex-wrap gap-4">
        {result?.users.length > 0 ? (
          result?.users.map((user) => <UserCard user={user} key={user._id}/>)
        ) : (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>No Users yet</p>
            <Link href="/sign-up" className="mt-2 font-bold text-accent-blue">
                Join to the first! 
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Page;

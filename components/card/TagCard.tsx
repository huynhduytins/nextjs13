import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const TagCard = () => {
  return (
    <Link
      href={``}
      className="shadow-light100_darknone w-full max-xs:min-w-full xs:w-[260px]"
    >
      <article className="background-light900_dark200 light-border flex w-full flex-col items-start justify-center rounded-2xl border p-8 gap-4">
        <div
          className={
            "paragraph-semibold rounded-md py-2 px-5 shadow-none bg-light-800 text-dark-300  dark:bg-dark-400 dark:text-light-900"
          }
        >
          javascript
        </div>
        <p className="max-h-20 overflow-y-clip w-48 small-regular dark:text-light-700 text-dark-500">
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS
        </p>
        <p className="small-medium dark:text-light-700 text-dark-500">
          <span className="text-sm font-semibold primary-text-gradient mr-4">
            23493+
          </span>
          Questions
        </p>
      </article>
    </Link>
  );
};

export default TagCard;

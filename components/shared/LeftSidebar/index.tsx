'use client'

import { useAuth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { sidebarLinks } from '@/constants'

const LeftSideBar = () => {
  const pathname = usePathname()
  const { isSignedIn } = useAuth()

  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <ul className="flex flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            link.route === pathname ||
            (pathname.includes(link.route) && link.route.length > 1)

          return (
            <li key={link.label}>
              <Link
                href={link.route}
                className={`${
                  isActive
                    ? 'primary-gradient rounded-lg text-light-900'
                    : 'text-dark300_light900'
                } flex items-center justify-start gap-4 rounded-lg bg-transparent p-4 lg:min-w-[214px]`}
              >
                <Image
                  src={link.imgURL}
                  alt="side-bar link"
                  width={20}
                  height={20}
                  className={`${isActive ? '' : 'invert-colors'}`}
                />
                <p
                  className={`${
                    isActive ? 'base-bold' : 'base-medium'
                  } max-lg:hidden`}
                >
                  {link.label}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
      {!isSignedIn && (
        <div className="flex flex-col gap-6">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <span className="max-lg:hidden">Sign Up</span>
              <Image
                src="/assets/icons/sign-up.svg"
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
            </Button>
          </Link>
        </div>
      )}
    </section>
  )
}

export default LeftSideBar

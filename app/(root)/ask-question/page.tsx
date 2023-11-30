import { clerkClient } from '@clerk/nextjs'

import Question from '@/components/form/Question'
import { getUserById } from '@/lib/actions/user.action'

const Page = async () => {
  const userId = 'CL123'

  const user = await getUserById({ userId })

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div>
        <Question author={JSON.stringify(user?._id)} />
      </div>
    </div>
  )
}

export default Page

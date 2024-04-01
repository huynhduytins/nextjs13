import Question from '@/components/form/Question'
import { getUserById } from '@/lib/actions/user.action'

const Page = async () => {
  const userId = 'CL123'

  const user = await getUserById({ userId })

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div>
        <Question author={JSON.stringify(user?._id)} />
      </div>
    </>
  )
}

export default Page

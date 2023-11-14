import { QuestionCardProps } from '@/components/shared/QuestionCard'
import { SidebarLink } from '@/types'

export const themes = [
  { value: 'light', label: 'Light', icon: '/assets/icons/sun.svg' },
  { value: 'dark', label: 'Dark', icon: '/assets/icons/moon.svg' },
  { value: 'system', label: 'System', icon: '/assets/icons/computer.svg' },
]

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: '/assets/icons/home.svg',
    route: '/',
    label: 'Home',
  },
  {
    imgURL: '/assets/icons/users.svg',
    route: '/community',
    label: 'Community',
  },
  {
    imgURL: '/assets/icons/star.svg',
    route: '/collection',
    label: 'Collections',
  },
  {
    imgURL: '/assets/icons/suitcase.svg',
    route: '/jobs',
    label: 'Find Jobs',
  },
  {
    imgURL: '/assets/icons/tag.svg',
    route: '/tags',
    label: 'Tags',
  },
  {
    imgURL: '/assets/icons/user.svg',
    route: '/profile',
    label: 'Profile',
  },
  {
    imgURL: '/assets/icons/question.svg',
    route: '/ask-question',
    label: 'Ask a question',
  },
]

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTE: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTE: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
}

export const HOT_NETWORKS = [
  {
    description:
      'Would it be appropriate to point out an error in another paper during a referee report?',
    link: '/questions/1',
  },
  {
    description: 'How can an airconditioning machine exist?',
    link: '/questions/2',
  },
  {
    description: 'Interrogated every time crossing UK Border as citizen',
    link: '/questions/3',
  },
  {
    description: 'Low digit addition generator',
    link: '/questions/4',
  },
  {
    description:
      'What is an example of 3 numbers that do not make up a vector?',
    link: '/questions/5',
  },
]

export const HOT_TAGS = [
  {
    tag: 'nextJS',
    views: '15',
    link: '/tags/nextJS',
  },
  {
    tag: 'test',
    views: '12',
    link: '/tags/test',
  },
  {
    tag: 'react',
    views: '7',
    link: '/tags/react',
  },
  {
    tag: 'css',
    views: '6',
    link: '/tags/css',
  },
]

export const HomePageFilters = [
  {
    name: 'Newest',
    value: 'newest',
  },
  { name: 'Recommended', value: 'recommended' },
  { name: 'Frequent', value: 'frequent' },
  { name: 'Unanswered', value: 'unanswered' },
]

export const dummyQuestionCardArray: QuestionCardProps[] = [
  {
    _id: '123',
    title: 'How to use TypeScript with React?',
    tags: [
      { _id: 'tag1', name: 'React' },
      { _id: 'tag2', name: 'TypeScript' },
    ],
    author: {
      _id: 'author123',
      name: 'Alice Johnson',
      avatar: 'alice-avatar.jpg',
    },
    upVotes: 15,
    views: 200,
    answers: [
      {
        answerId: 'answer1',
        content: 'You can use tsx files in React projects.',
        author: 'Bob Smith',
      },
      {
        answerId: 'answer2',
        content: 'Install @types/react for TypeScript support.',
        author: 'Charlie Brown',
      },
    ],
    createdAt: new Date('2023-01-15'),
  },
  {
    _id: '456',
    title: 'Best practices for responsive web design?',
    tags: [
      { _id: 'tag3', name: 'Web Design' },
      { _id: 'tag4', name: 'Responsive Design' },
    ],
    author: {
      _id: 'author456',
      name: 'Eve Williams',
      avatar: 'eve-avatar.jpg',
    },
    upVotes: 20,
    views: 250,
    answers: [
      {
        answerId: 'answer3',
        content: 'Use media queries for different screen sizes.',
        author: 'David Miller',
      },
      {
        answerId: 'answer4',
        content: 'Flexbox and Grid are powerful tools for layout.',
        author: 'Grace Turner',
      },
    ],
    createdAt: new Date('2023-02-20'),
  },
  // Add more dummy data as needed
]

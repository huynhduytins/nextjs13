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

export const FILTERS = [
  {
    title: 'Newest',
    value: 'newest',
  },
  { title: 'Recommended', value: 'recommended' },
  { title: 'Frequent', value: 'frequent' },
  { title: 'Unanswered', value: 'unanswered' },
]

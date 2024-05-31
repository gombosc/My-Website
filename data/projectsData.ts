interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'My Digital Experience',
    description: `Everything started from the day I was born...`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'Writing for 365 days',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  {
  title: 'A next.js website',
  description: `A personal website built with Next.js and Tailwind CSS. It's a simple and clean design that is fully responsive and easy to customize.`,
  imgSrc: '/static/bg/mathew_macquarrie.jpg',
  href: '/blog/the-time-machine',
  },
]

export default projectsData

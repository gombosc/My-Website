interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Face Recognition App with Clarifai API',
    description: `Everything started from the day I was born...`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
	title: 'Dashboard - Next.js',
	description: `A personal website built with Next.js and Tailwind CSS. It's a simple and clean design that is fully responsive and easy to customize.`,
	imgSrc: '/static/bg/mathew_macquarrie.jpg',
	href: '/blog/the-time-machine',
  },
  {
    title: 'Nasa Space Apps',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  {
  title: 'Custom Countdown',
  description: `A personal website built with Next.js and Tailwind CSS. It's a simple and clean design that is fully responsive and easy to customize.`,
  imgSrc: '/static/bg/mathew_macquarrie.jpg',
  href: '/blog/the-time-machine',
  },
  {
	title: 'Music Player',
	description: 'test',
	href: 'https://gombosc.github.io/NumbersTriviaAPI/',
  },
  {
	title: 'Red hot chili peppers',
	description: 'test',
	href: 'https://gombosc.github.io/RedHotChiliPeppers.github.io/',
  },
  {
	title: 'Numbers Trivia',
	description: 'test',
	href: 'https://gombosc.github.io/NumbersTriviaAPI/',
  },
  {
	title: 'Quote Generator',
	description: 'test',
	href: 'https://gombosc.github.io/NumbersTriviaAPI/',
  },
  {
	title: 'Joke Teller',
	description: 'test',
	href: 'https://gombosc.github.io/NumbersTriviaAPI/',
  },
  {
	title: 'Dark Mode',
	description: 'test',
	href: 'https://gombosc.github.io/NumbersTriviaAPI/',
  },
  {
	title: 'Robofriends',
	description: 'test',
	href: 'https://gombosc.github.io/NumbersTriviaAPI/',
  }
]

export default projectsData

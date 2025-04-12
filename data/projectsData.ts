interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Football Teams - Flutter Demo',
    description: `A two pages demo application created with Flutter Flow as an exercise for a company, rendering information from an API and optimized for edge cases and a smooth experience. Built with the following Flutter packages: dio, riverpod, flutter_hooks, go_router, easy_localization.`,
    imgSrc: '/static/images/mywebsite.png',
    href: 'https://www.cosmingombos.com',
  },
  {
    title: 'Robot Control Interface - Built On Next.js With Typescript / Tailwind',
    description: 'Built an experimental interface using Next.js to explore web-based robot control capabilities, testing technologies like WebSockets for real-time communication, gRPC for efficient service calls, WebRTC for streaming video feeds, and ROS (Robot Operating System) coupled with Gazebo for robot simulation and control. This was meant as a testing ground for evaluating different approaches to remote robotics interaction.',
    imgSrc: '/static/images/cohaven.jpg',
    href: 'https://www.cosmingombos.com',
  },
  {
    title: 'CoHaven - Flutter Mobile Application Demo',
    description: `A personal project built with Flutter and Flutter Flow, created from scratch. It envolved wireframing, UI/UX design, Flutter development, API's and Supabase for backend. Currently not live. `,
    imgSrc: '/static/images/cohaven.jpg',
    href: 'https://www.cosmingombos.com',
  },
  {
    title: 'Personal Website',
    description: `Created with NextJS, Tailwind CSS, and TypeScript. This website is a personal project that I built to showcase my work and share my thoughts.`,
    imgSrc: '/static/images/mywebsite.png',
    href: 'https://www.cosmingombos.com',
  },
  {
    title: 'Face Recognition App',
    description: `A full-stack web application that uses the Clarifai API to detect faces. The front-end is built with React and the back-end is built with Node.js, hosted on Heroku.`,
    imgSrc: '/static/images/clarifai.png',
    href: 'https://face-recognition-clarifai-062a0a8ab032.herokuapp.com/',
  },
  {
	title: 'Dashboard - Next.js',
	description: `A dashboard built with Typescript and Tailwind CSS while following Next tutorial. It's a simple and clean design that is fully responsive and easy to customize.`,
	imgSrc: '/static/images/dashboard.png',
	href: 'https://nextjs-dashboard-acme.vercel.app/',
  },
  {
    title: 'Music Player',
    description: 'A music player app that allows you to play, pause, skip, and go back to the previous song. Built with HTML, CSS, and JavaScript.',
    imgSrc: '/static/images/player.png',
    href: 'https://gombosc.github.io/MusicPlayer/',
  },
  {
    title: 'Animated Template',
    description: 'A custom animated website template built with HTML, CSS, and JavaScript. It features a responsive design and a clean layout.',
    imgSrc: '/static/images/template1.png',
    href: 'https://gombosc.github.io/AnimatedWebsiteTemplate/',
  },
  {

    title: 'Quote Generator',
    description: `A simple quote generator app that fetches quotes from the Quotable API. Built with HTML, CSS, and JavaScript. It allows you to generate a random quote and share it on Twitter`,
    imgSrc: '/static/images/quotes.png',
    href: 'https://gombosc.github.io/QuoteGenerator/',
  },
  {
  title: 'Custom Countdown',
  description: `A simple countdown app that allows you to set multiple dates and then display the time remaining until those dates. Built with HTML, CSS, and JavaScript`,
  imgSrc: '/static/images/countdown.png',
  href: 'https://gombosc.github.io/CustomCountdown/',
  },
  {
    title: 'Animated Navigation',
    description: 'test',
    imgSrc: '/static/images/template2.png',
    href: 'https://gombosc.github.io/AnimatedNavMenu/',
  },
  {
    title: 'NASA Space Apps',
    description: 'A website created for the NASA Space Apps Challenge as a demo project meant to showcase during the pitch presentation. Built with Bootstrap and JavaScript in a couple of hours just as a proof of concept for our story.',
    imgSrc: '/static/images/nasa.png',
    href: 'https://gombosc.github.io/Nasa-Space-App/',
  },
  {
    title: 'Joke Teller',
    description: 'A joke teller app that uses the JokeAPI to fetch random jokes and tell them using the Text-to-Speech API. Built with HTML, CSS, and JavaScript.',
    imgSrc: '/static/images/joke.png',
    href: 'https://gombosc.github.io/JokeTeller/',
  },
  {
    title: 'Numbers Trivia',
    description: 'A numbers trivia app that fetches random trivia facts about numbers from the Numbers API, four categories possible. Built with HTML, CSS, and JavaScript.',
    imgSrc: '/static/images/numbers.png',
    href: 'https://gombosc.github.io/NumbersTriviaAPI/',
    },
  {
	title: 'Red hot chili peppers',
  imgSrc: '/static/images/redhot.png',
	description: 'Mockup website created for the Red Hot Chili Peppers band, interactive showcase of their music and history.',
  }
]

export default projectsData

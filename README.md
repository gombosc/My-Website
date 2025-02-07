<h1>My Next.Js personal website</h1>

This is my personal website created as a medium for my projects and articles.

Initial Template used: Tailwind CSS Blog by Timothy Lin

Main Inspiration: <a href="https://www.dalelarroder.com/">Dale Larroder Website</a>

<h2>Features</h2>

- Next.js with Typescript
  
- Contentlayer
  
- Taiwlind 3.0
  
- MDX - write JSX in markdown documents!
  
- Near perfect lighthouse score
  
- Light and dark theme
  
- Font optimization with next/font
  
- Analytics
  
- Comments via Giscus
  
- Search funtion with Kbar
  
- Automatic image optimization via next/image
  
- Support for tags
  
- Support for multiple authors
  
- SEO friendly with RSS feed

<h3>Future implementations</h3>

- Fix comments (work in progress)
  
- Newsletter
  
- Guestbook
  
- Add reaction button

- Add more resources


# Notes 
Contentlayer is not fully supported on Windows so it created a scheme url error when launched with build mode. The Rss and postbuild had to be changed, plus the next config file extension. Added a custom check in rss when the page array might be empty so that it doesn't throw an error with contentlayer and stops the deployment process. This error was the most annoying error since the start of the project



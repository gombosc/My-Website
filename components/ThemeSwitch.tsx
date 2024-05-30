'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useContext } from 'react'
import { LogoContext } from './LogoContext'
import {motion} from 'framer-motion'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'

// Constants for background and logo images
const darkBackground = '/static/bg/francesco_ungaro.jpg'
const lightBackground = '/static/bg/hyunwon_jang.jpg'
const darkLogo = '/static/logo/6.png'
const lightLogo = '/static/logo/5.png'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  const { updateLogoUrl } = useContext(LogoContext);

  if (!mounted) {
    return null
  }

  const imageUrl = theme === 'dark' || resolvedTheme === 'dark' ? darkBackground : lightBackground;
  const logoUrl = theme === 'dark' || resolvedTheme === 'dark' ? darkLogo : lightLogo;
  updateLogoUrl(logoUrl); // Update context on theme change

  return (
	<div className="theme-switch">
    <motion.button
       id="theme-btn"
	   aria-label="Toggle Dark Mode"
	   type="button"
	   className="ml-1 mr-1 h-8 w-8 rounded p-1"
	   whileTap={{
		 scale: 0.7,
		 rotate: 360,
		 transition: { duration: 0.2 },
	   }}
	   whileHover={{ scale: 1.2 }}
	   onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
	 >
	   <svg
		 xmlns="http://www.w3.org/2000/svg"
		 viewBox="0 0 20 20"
		 fill="currentColor"
		 className="text-gray-900 dark:text-gray-100"
	   >
		 {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
		   <BsSunFill size={16} />
		 ) : (
		   <BsMoonFill size={18} />
		 )}
	   </svg>
    </motion.button>
	<div className="bg-image bg-style" >
		<Image src={imageUrl} alt="Background" layout="fill" objectFit="cover" />
	</div>

	</div>
  )
  
}


export default ThemeSwitch

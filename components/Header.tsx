'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import { useContext } from 'react'
import { LogoContext } from './LogoContext'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from 'next/image'

const Header = () => {

	const { logoUrl, updateLogoUrl } = useContext(LogoContext);

  // Update logoUrl based on theme on mount

return (
	<header className="flex items-center justify-between py-10 relative">
		<div>
			<Link href="/" aria-label={siteMetadata.headerTitle}>
				<div className="flex items-center justify-between">
					<div className="mr-3">
						<Image
							className="absolute left-0"
							style={{ top: -45, left: -25 }}
							src={logoUrl}
							alt="logo"
							width={200}
							height={100}
							/>
					</div>
					{typeof siteMetadata.headerTitle === 'string' ? (
						<div className="hidden h-6 text-2xl font-semibold sm:block">
							{siteMetadata.headerTitle}
						</div>
					) : (
						siteMetadata.headerTitle
					)}
				</div>
			</Link>
		</div>
		<div className="flex items-center space-x-3 leading-4 sm:space-x-3 font-extrabold">
			{headerNavLinks
				.filter((link) => link.href !== '/')
				.map((link) => (
					<Link
						key={link.title}
						href={link.href}
						className="hidden font-increase-effect horizontal-underline text-base sm:block xl:text-lg xl:m-1 xl:px-1"
					>
						{link.title}
					</Link>
				))}
			<ThemeSwitch />
			<MobileNav />
		</div>
	</header>
)
}

export default Header
'use client'

import { genPageMetadata } from 'app/seo'
import React, {useState, useEffect} from 'react';
import { categories } from '@/data/bookLists';

export const metadata = genPageMetadata({ title: 'Resources' })

export default function Resources(){
	const [isListVisible, setIsListVisible] = useState(false);
	const toggleListVisibility = () => {setIsListVisible(!isListVisible)};

	useEffect(() => {
	},[]);

	return (
		<div className="divide-y divide-gray-800 dark:divide-gray-500">
				<div className="space-y-2 pb-2 pt-6 md:space-y-5">
					<h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
						Resources
					</h1>
					<p className="text-lg leading-7 text-gray-800 dark:text-gray-200">Find more on my <a href='https://linktr.ee/gombosc' style={{color:'crimson'}}>LinkTree Page</a></p>
				</div>
				<div>
				<h2 className='text-3xl pt-6 font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 xl:5xl'>
					Reading List
				</h2>
				<div className="container py-5">
				{categories.map((category) => (
					<div key={category.name}>
						<details open={isListVisible}>
						<summary className="cursor-pointer text-2xl font-extrabold leading- tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14 xl:text-3xl
						 p-2 rounded hover:bg-red-400 dark:hover:bg-red-400 focus:outline-none"
						 onClick={toggleListVisibility}
						 >
							{category.name}
						</summary>
						{category.content && (
							<ul className="list-disc pt-3 pb-3 pl-10">
								{category.content.map((item) => (
									<li key={item} className="text-lg p-2 leading-7 text-gray-800 dark:text-gray-200">
										{item}
									</li>
								))}
							</ul>
						)}
						</details>
					</div>
				))}
			</div>
		</div>
	</div>
	)
}

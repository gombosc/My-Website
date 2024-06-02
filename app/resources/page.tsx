'use client'

import { genPageMetadata } from 'app/seo'
import React, {useState} from 'react';

// export const metadata = genPageMetadata({ title: 'Resources' })

export default function Resources(){
	const [isListVisible, setIsListVisible] = useState(false);
	const toggleListVisibility = () => {setIsListVisible(!isListVisible)};

	const categories = [	
		{
			name: 'Business',
			content: [
			'Atomic Habits (James Clear)', 'Business Model Gereration (Alexander Osterwalder)', 'The Mom Test (Rob Fitzpatrick)', 'The Lean Startup (Eric Ries)', 'The Four Hour Workweek (Tim Ferris), "The Everything Store: Jeff Bezos and the Age of Amazon', 'Buyology (Martin Lindstrom)',
			 'Brandwashed (Martin Lindstrom)', 'Growth Hacker (Ryan Holiday)', 'Influence: The Psychology of Persuasion (Robert B. Cialdini)', 'Principles (Ray Dalio)',
			 'The Intelligent Investor (Benjamin Graham)', 'What I Learned Losing A Million Dollars (Jim Paul)', 'Wealth of Nations (Adam Smith)']
		},
		{
			name: 'Life',
			content: ['Breath (James Nestor)', 'The Wim Hof Method (Wim Hof)', 'The Lonely Century (Noreena Hertz)', 'Utopia for Realists (Rutger Bregman)', 'Man Search for Meaning (Viktor Frankl)', 'The Archetypes and Collective Unconscious (Carl Jung)'
					  , ' 100 Mistakes that changed History (Bill Fawcett)', 'When Breath Becomes Air (Paul Kalanithi)', 'The Hero Journey (Joseph Campbell)',]
		},
		{
			name: 'Biographies',
			content: ['The Autobiography of Benjamin Franklin', "The Autobiography of Henry Ford", "Surely You’re Joking, Mr. Feynman! (Richard Feynman)", "Ernesto Che Guevara: A Revolutionary Life (Jon Lee Anderson)", "My Inventions: Nikola Tesla"]
		},
		{
			name: 'Fiction',
			content: ['1984 (George Orwell)', 'Brave New World (Aldous Huxley)', 'The Plague (Albert Camus)', 'Crime and Punishment (Fyodor Dostoevsky)', 'One Hundread Years of Solitutde (Gabriel Garcia Marquez)', 'The Lord of the Rings', 'The Wheel of Time (Robert Jordan)', 'The Witcher Series (Andrzej Sapkowski)']
		}

	]

	return (
		<div className="divide-y divide-gray-800 dark:divide-gray-500">
				<div className="space-y-2 pb-8 pt-6 md:space-y-5">
					<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
						Resources
					</h1>
					<p className="text-lg leading-7 text-gray-800 dark:text-gray-200">
						Some of the resources I've found useful across the years.
					</p>
				</div>
				<h2 className='text-2xl font-extrabold leading- tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
					Top Books
				</h2>
				<div className="container py-5">
				{categories.map((category) => (
					<div key={category.name}>
						<details open={isListVisible}>
						<summary className="cursor-pointer text-2xl font-extrabold leading- tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 xl:text-3xl p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							{category.name}
						</summary>
						{category.content && (
							<ul className="list-disc pt-8 pb-8 pl-10">
								{category.content.map((item) => (
									<li key={item} className="text-lg leading-7 text-gray-800 dark:text-gray-200">
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
							);
						}

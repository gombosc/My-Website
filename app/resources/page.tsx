import { genPageMetadata } from 'app/seo'
import React from 'react';
import { categories } from 'data/bookLists';
import CategoryList from 'components/categoryList';

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Resources(){
	return (
		<div className="divide-y divide-gray-800 dark:divide-gray-500">
				<div className="space-y-2 pb-2 pt-6 md:space-y-5">
					<h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
						Resources
					</h1>
					<p className="text-lg leading-7 text-gray-800 dark:text-gray-200">Find more on my <a href='https://linktr.ee/gombosc' style={{color:'crimson'}}>LinkTree Page</a>
					</p>
				</div>
				<div>
				<h2 className='text-3xl pt-6 font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 xl:5xl'>
					Reading List
				</h2>
				<CategoryList categories={categories} />
			</div>
		</div>
	)
}

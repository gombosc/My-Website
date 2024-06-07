"use client";

import React, { useState, useEffect } from 'react';

interface Category {
    name: string;
    content: string[];
}

interface CategoryListProps {
    categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
    const [visibleCategories, setVisibleCategories] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        // Initially set all categories to closed
        const initialVisibility: { [key: string]: boolean } = {};
        categories.forEach(category => {
            initialVisibility[category.name] = false;
        });
        setVisibleCategories(initialVisibility);
    }, [categories]);

    const toggleCategory = (categoryName: string) => {
        setVisibleCategories(prevState => ({
            ...prevState,
            [categoryName]: !prevState[categoryName],
        }));
    };

    return (
        <div className="container py-5">
            {categories.map((category) => (
                <div key={category.name}>
                    <details open={visibleCategories[category.name]}>
                        <summary
                            onClick={(e) => {
                                e.preventDefault();
                                toggleCategory(category.name);
                            }}
                            className="cursor-pointer text-2xl font-extrabold leading- tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14 xl:text-3xl p-2 rounded hover:bg-red-400 dark:hover:bg-red-400 focus:outline-none"
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
    );
};

export default CategoryList;
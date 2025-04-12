'use client'

import { useState, useEffect } from 'react'
import siteMetadata from '@/data/siteMetadata.mjs'

interface GiscusConfig {
  repo: string
  repositoryId: string
  category: string
  categoryId: string
  mapping: string
  reactions: string
  metadata: string
  theme: string
  darkTheme: string
  lang: string
  themeURL: string
}

interface CommentsConfig {
  provider: string
  giscusConfig: GiscusConfig
}

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)
  
  useEffect(() => {
    // Only run this effect when the button is clicked
    if (!loadComments) return;
    
    // Clean up any existing giscus elements
    const existingScript = document.querySelector('script[src="https://giscus.app/client.js"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Create and append the script
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'gombosc/My-Website');
    script.setAttribute('data-repo-id', 'R_kgDOLPQM1A');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOLPQM1M4CfybQ');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;
    
    const commentsDiv = document.getElementById('giscus-comments');
    if (commentsDiv) {
      commentsDiv.appendChild(script);
    }
    
    // Clean up function
    return () => {
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [loadComments]);
  
  return (
    <>
      {!loadComments && (
        <button 
          onClick={() => setLoadComments(true)}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Load Comments
        </button>
      )}
      <div id="giscus-comments" className="mt-4 giscus"></div>
    </>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
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
  const { theme, resolvedTheme } = useTheme()
  
  useEffect(() => {
    // Only run this effect when the button is clicked
    if (!loadComments) return;
    
    // Clean up any existing giscus elements
    const existingScript = document.querySelector('script[src="https://giscus.app/client.js"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Determine theme based on the current website theme
    const giscusTheme = theme === 'dark' || resolvedTheme === 'dark' 
      ? 'transparent_dark'  // Use dark theme when website is in dark mode
      : 'light';            // Use light theme when website is in light mode
    
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
    script.setAttribute('data-theme', giscusTheme);
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
  }, [loadComments, theme, resolvedTheme]);
  
  // Listen for theme changes and reload comments if they're already loaded
  useEffect(() => {
    // Skip if comments aren't loaded yet
    if (!loadComments) return;
    
    // Get the existing giscus iframe
    const iframe = document.querySelector<HTMLIFrameElement>('.giscus-frame');
    if (!iframe) return;
    
    // Send message to giscus to update theme
    const giscusTheme = theme === 'dark' || resolvedTheme === 'dark' ? 'transparent_dark' : 'light';
    iframe.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: giscusTheme } } },
      'https://giscus.app'
    );
  }, [theme, resolvedTheme, loadComments]);
  
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

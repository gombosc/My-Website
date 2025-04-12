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
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    // Only load script after button is clicked
    if (!loadComments || loaded) return
    
    const commentsConfig = siteMetadata.comments as CommentsConfig
    const { giscusConfig } = commentsConfig
    
    // Load the giscus script
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', giscusConfig.repo)
    script.setAttribute('data-repo-id', giscusConfig.repositoryId)
    script.setAttribute('data-category', giscusConfig.category)
    script.setAttribute('data-category-id', giscusConfig.categoryId)
    script.setAttribute('data-mapping', giscusConfig.mapping)
    script.setAttribute('data-reactions-enabled', giscusConfig.reactions)
    script.setAttribute('data-emit-metadata', giscusConfig.metadata)
    script.setAttribute('data-theme', giscusConfig.theme)
    script.setAttribute('data-lang', giscusConfig.lang)
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    const commentsDiv = document.getElementById('giscus-comments')
    if (commentsDiv) {
      commentsDiv.appendChild(script)
      setLoaded(true)
    }
    
    return () => {
      // Clean up - remove the script when component is unmounted
      if (commentsDiv && commentsDiv.contains(script)) {
        commentsDiv.removeChild(script)
      }
    }
  }, [loadComments, loaded])
  
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
      {loadComments && <div id="giscus-comments" className="mt-4"></div>}
    </>
  )
}

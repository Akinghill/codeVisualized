import React from 'react'
import BlogCard from '../../components/blog-card/blog-card.component'

import './blog-page.styles.scss'

export default function BlogPage() {
  return (
    <div>
      <section className="section ph-1r">
        <h2 className="posts-title">Posts</h2>
        <div className="blog-posts-list">
          <BlogCard />
        </div>
      </section>
    </div>
  )
}

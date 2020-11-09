import React from 'react'

import './blog-post-card.styles.scss'

export const BlogPostCard = () => (
  <div className="blog-post-card">
    <img src="./assets/blogpost1.jpg" alt="post preview" />
    <div className="post-info">
      <p className="date">09-19-2993</p>
      <p className="summary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, vel!</p>
    </div>
  </div>
)


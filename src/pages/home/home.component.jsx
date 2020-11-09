import React from 'react'

import { Header } from '../../components/header/header.component'
import { BlogPostCard } from '../../components/blog-post-card/blog-post-card.component'

import './home.styles.scss'

const HomePage = () => (
  <div className="home-page">
    <Header />

    <div className="mission-statement-container">
      <h2 className="mission-statement-text">
        Learn to code through visual experiences.
      </h2>
    </div>


    <div className="recent-posts">
      <BlogPostCard />
    </div>

  </div>
)

export default HomePage
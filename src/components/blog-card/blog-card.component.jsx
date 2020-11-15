import React from 'react'

import './blog-card.styles.scss'

export default function BlogCard() {
  return (
    <div className="post">
    <div className="img-container">
      <img className="post-img" src="./assets/blogpost1.jpg" alt="post" />
    </div>

    <div className="post-content-preview">
      <h3>Post title</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor fuga nihil aliquam repellat quas, porro molestias, quisquam tenetur placeat unde libero magni quam quibusdam obcaecati architecto optio necessitatibus quasi! Praesentium harum, iusto commodi esse hict.</p>
    </div>
  </div>
  )
}

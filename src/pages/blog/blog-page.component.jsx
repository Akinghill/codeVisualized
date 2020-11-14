import React from 'react'

import Navbar from '../../components/navbar/navbar.component'
import { Card } from '../../components/card/card.component'

import './blog-page.styles.scss'

export default function BlogPage() {
  return (
    <div>
      <Navbar />
      <section className="section ph-1r">
        <h2 className="posts-title">Posts</h2>
        <div className="blog-posts-list">

          <div className="post">
            <div className="img-container">
              <img className="post-img" src="./assets/blogpost1.jpg" alt="post" />
            </div>

            <div className="post-content-preview">
              <h3>Post title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor fuga nihil aliquam repellat quas, porro molestias, quisquam tenetur placeat unde libero magni quam quibusdam obcaecati architecto optio necessitatibus quasi! Praesentium harum, iusto commodi esse hict.</p>
            </div>
          </div>
          <div className="post">
            <div className="img-container">
              <img className="post-img" src="./assets/blogpost1.jpg" alt="post" />
            </div>

            <div className="post-content-preview">
              <h3>Post title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor fuga nihil aliquam repellat quas, porro molestias, quisquam tenetur placeat unde libero magni quam quibusdam obcaecati architecto optio necessitatibus quasi! Praesentium harum, iusto commodi esse hict.</p>
            </div>
          </div>


        </div>
      </section>
    </div>
  )
}

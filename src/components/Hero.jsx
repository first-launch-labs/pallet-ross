import React from 'react'
import Carousel from './ImageCarousel'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="headline">
          A place to display your<br className="hide-sm" /> masterpiece.
        </h1>

        <div>Beautiful MVP websites & mobile apps — built fast, built right.</div>

        <Carousel />

        <p className="subhead">
          We help shops and startups take the step online — premium visuals, fast delivery, and conversion-first engineering.
        </p>

        <div className="cta-row">
          <a className="btn primary" href="#">Starting at $ 999</a>
          <a className="btn ghost" href="#">Read more</a>
        </div>

        
      </div>
    </section>
  )
}

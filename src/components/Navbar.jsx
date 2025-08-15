import React from 'react'

export default function Navbar() {
  return (
    <header className="nav">
      <div className="brand">
        <div className="logo">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2l3.6 6.7 7.4 1.1-5.4 5.2 1.3 7.3L12 18.6 5.1 22.3l1.3-7.3L1 9.8l7.4-1.1L12 2z" />
          </svg>
        </div>
        <span>First Launch Labs</span>
      </div>

      <nav className="links">
        <a href="#">Get Started</a>
        <a href="#">Create strategy</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
        <a href="#">Solution</a>
        <a href="#">E-Commerce</a>
      </nav>

      <div className="actions">
        <button className="icon-btn" aria-label="Account">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
          </svg>
        </button>
        <button className="icon-btn" aria-label="Theme">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3a9 9 0 109 9 7.5 7.5 0 01-9-9z" />
          </svg>
        </button>
      </div>
    </header>
  )
}

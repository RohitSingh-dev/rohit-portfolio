import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.linkedin.com/in/rohitsingh-dev/" className="home__social-icon" target='_blank'>
            <i className="uil uil-linkedin"></i>
        </a>

        <a href="https://github.com/RohitSingh-dev" className="home__social-icon" target='_blank'>
            <i className="uil uil-github-alt"></i>
        </a>

        <a href="https://x.com/not_a_zenin" className="home__social-icon" target='_blank'>
            <i className="uil uil-twitter"></i>
        </a>
    </div>
  )
}

export default Social
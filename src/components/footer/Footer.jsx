import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Rohit</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/rohit-kumar-singh-b15411240" className="footer__social-link" target='_blank'>
                    <i className="bx bxl-linkedin"></i>
                </a>

                <a href="https://github.com/RohitSingh-root" className="footer__social-link" target='_blank'>
                    <i className="bx bxl-github"></i>
                </a>

                <a href="https://x.com/rohit_singh2002?t=jQHnz2kmGNLNyXGUqpEoEg&s=09" className="footer__social-link" target='_blank'>
                    <i className="bx bxl-twitter"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Rohit.dev All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
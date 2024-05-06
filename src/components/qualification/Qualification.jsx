import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState]= useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState ===1 ? "qualification__button qualification__active button--flex" :
            "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>

                <div className={toggleState ===2 ? "qualification__button qualification__active button--flex" :
            "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : 
            "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.Tech (Hons.)</h3>
                            <span className="qualification__subtitle">BCET DGP</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2020-Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Intermediate</h3>
                            <span className="qualification__subtitle">Sri Chaitanya</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2018-2020
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Matriculation</h3>
                            <span className="qualification__subtitle">St. Xavier's School</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2007-2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : 
            "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development Intern</h3>
                            <span className="qualification__subtitle">Zidio Development</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> Feb-Mar(2024)
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
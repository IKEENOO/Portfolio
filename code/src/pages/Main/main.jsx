import React, { Component } from "react";
import AOS from 'aos';
import "./main.css";
import 'aos/dist/aos.css';

AOS.init();

export class Main extends Component {
    render() {
        return (
            <>
                <section>
                    <h1 data-aos="fade-right">KUDRYAVTSEV</h1>
                    <h2 data-aos="fade-left">frontend developer</h2>
                    
                </section>
                {/*<div className="links">

                        <a href="https://github.com/IKEENOO" target="_blanc">
                            <img src="https://cdn.jsdelivr.net/gh/IKEENOO/Portfolio/code/src/assets/github.png" alt="github"/>
                        </a>

                        <a href="https://www.linkedin.com/in/kudryavstev/" target="_blanc">
                            <img src="https://cdn.jsdelivr.net/gh/IKEENOO/Portfolio/code/src/assets/linkedin.png" alt="linkedin"/>
                        </a>

                        <a href="mailto:kudryavtsev.dev@gmail.com" target="_blanc">
                            <img src="https://cdn.jsdelivr.net/gh/IKEENOO/Portfolio/code/src/assets/gmail.png" alt="gmail"/>
                        </a>

                    </div>
                <section>
                    <p>Hi, i'm Oleg</p>
                </section>

                <section>
                    <h3>Education</h3>
                </section>
                
                <section>
                    <h3>Experience</h3>
                </section>

                <section>
                    <h3>Project</h3>
                </section>

                <section>
                    <h3>Contact me</h3>
                </section>
                */}

            </>
        );
    }
}
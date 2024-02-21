import React, { Component } from "react";
import "./main.css";

export class Main extends Component {
    render() {
        return (
            <>
                <section>
                    <h1>KUDRYAVTSEV</h1>
                    <h2>frontend developer</h2>
                    <div className="links">

                        <a href="https://github.com/IKEENOO" target="_blanc">
                            <i class="fa-brands fa-square-github"></i>
                            <img src="../../assets/github.png" alt="github"/>
                        </a>

                        <a href="https://www.linkedin.com/in/kudryavstev/" target="_blanc">
                            <i class="fa-brands fa-linkedin" ></i>
                            <img src="../../assets/linkedin.png" alt="linkedin"/>
                        </a>

                        <a href="mailto:kudryavtsev.dev@gmail.com" target="_blanc">
                            <i class="fa-solid fa-square-envelope"></i>
                            <img src="code/src/assets/linkedin.png" alt="gmail"/>
                        </a>

                    </div>
                </section>
                {/*
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
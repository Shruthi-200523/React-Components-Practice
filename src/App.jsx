import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    const projects = [
        {
            title: "Personal Portfolio",
            description:
                "A stylish personal portfolio website showcasing my education, projects and skills.",
            technology: "HTML + CSS"
        },
        {
            title: "Placement Compass",
            description:
                "A placement preparation platform designed to help students prepare for technical interviews.",
            technology: "React + Spring Boot + MySQL"
        },
        {
            title: "Secure Data Protection",
            description:
                "A secure data hiding project using encryption and steganography techniques.",
            technology: "Python + AES + RSA + LSB"
        }
    ];

    return (
        <div className="app">

            <Header />

            <main>

                <section id="home" className="hero">
                    <p className="small-text">
                        REACT COMPONENTS PRACTICE
                    </p>

                    <h1>
                        Building with
                        <span> Reusable Components.</span>
                    </h1>

                    <p className="hero-description">
                        A simple React project demonstrating
                        reusable components, props, state,
                        events and dynamic rendering.
                    </p>

                    <a href="#projects" className="hero-button">
                        Explore Projects →
                    </a>
                </section>


                <section className="components-section">

                    <p className="small-text">
                        WHAT I LEARNED
                    </p>

                    <h2>React Fundamentals</h2>

                    <div className="skills-grid">

                        <div className="skill-box">
                            <span>01</span>
                            <h3>Components</h3>
                            <p>
                                Breaking the UI into reusable
                                building blocks.
                            </p>
                        </div>

                        <div className="skill-box">
                            <span>02</span>
                            <h3>Props</h3>
                            <p>
                                Passing data from one component
                                to another.
                            </p>
                        </div>

                        <div className="skill-box">
                            <span>03</span>
                            <h3>State</h3>
                            <p>
                                Managing changing data inside
                                a React component.
                            </p>
                        </div>

                        <div className="skill-box">
                            <span>04</span>
                            <h3>Events</h3>
                            <p>
                                Handling user interactions
                                like clicks and form submission.
                            </p>
                        </div>

                    </div>
                </section>


                <section id="projects" className="projects-section">

                    <p className="small-text">
                        DYNAMIC RENDERING
                    </p>

                    <h2>My Projects</h2>

                    <div className="cards-container">

                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                title={project.title}
                                description={project.description}
                                technology={project.technology}
                            />
                        ))}

                    </div>

                </section>


                <section className="counter-section">

                    <p className="small-text">
                        STATE PRACTICE
                    </p>

                    <h2>Interactive Counter</h2>

                    <p className="counter-number">
                        {count}
                    </p>

                    <p className="counter-text">
                        Button clicked {count}{" "}
                        {count === 1 ? "time" : "times"}
                    </p>

                    <Button
                        text="Click Me"
                        onClick={handleClick}
                    />

                </section>


                <section id="contact" className="contact-section">

                    <p className="small-text">
                        STATE + FORM
                    </p>

                    <Form />

                </section>

            </main>

            <Footer />

        </div>
    );
}

export default App;
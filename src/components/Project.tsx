import React, { useState } from "react";
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    tech: string;
}

function Project() {
    const projects: ProjectCardProps[] = [
        {
            image: mock09,
            title: "AI Coffee Serving Robot",
            description: "Built an intelligent robotic coffee-serving system using LLM-based interaction and computer vision safety monitoring to prevent pouring when human hands are detected near the cup.",
            tech: "Python • Computer Vision • LLM • Robotics • Safety AI"
        },
        {
            image: mock10,
            title: "Arabic Calligraphy Robot – FR5 / FR10",
            description: "Developed motion control and AI software for industrial FAIRINO FR5/FR10 robots to convert digital Arabic calligraphy into precise robotic handwriting.",
            tech: "Robotics • Motion Control • Industrial Automation • AI"
        },
        {
            image: mock06,
            title: "AI-Powered Smart Elevator System",
            description: "Built an intelligent elevator prototype with voice commands and facial recognition. The system recognizes returning users and predicts their destination floor using behavioral history.",
            tech: "Python • Computer Vision • Speech Recognition • Embedded Systems"
        },
        {
            image: mock07,
            title: "AI Fraud Detection & Invoice Intelligence",
            description: "Developed a machine learning system for financial fraud detection combining classification models with LLM reasoning to detect anomalies in invoices and financial documents.",
            tech: "Machine Learning • LLM • Data Analysis • Python"
        },
        {
            image: mock08,
            title: "Physical XO AI Robot",
            description: "Designed a real-world robotic Tic-Tac-Toe system where users play against an AI agent controlling the robot to execute game moves on a physical board.",
            tech: "AI Algorithms • Robotics • Hardware Integration"
        },
        {
            image: mock05,
            title: "Hand Gesture Mouse Control System",
            description: "Developed a computer vision system enabling users to control the mouse using hand gestures captured through a webcam for touchless interaction.",
            tech: "Python • OpenCV • Computer Vision • Hand Tracking"
        },
    ];

    const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null);

    return (
        <div className="projects-container" id="projects">
            <h1>Applied AI & Robotics Projects</h1>

            <div className="projects-grid">
                {projects.map((proj, index) => (
                    <div
                        key={index}
                        className="project"
                        onClick={() => setSelectedProject(proj)}
                    >
                        <img src={proj.image} className="zoom" alt={proj.title} />
                        <h2>{proj.title}</h2>
                        <p>{proj.description.substring(0, 100)}...</p>
                        <p className="tech">{proj.tech}</p>
                    </div>
                ))}
            </div>

            {/* Fullscreen Popup */}
            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>
                        <img src={selectedProject.image} alt={selectedProject.title} />
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                        <p className="tech">{selectedProject.tech}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;
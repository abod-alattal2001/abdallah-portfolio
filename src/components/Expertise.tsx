import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faMicrochip, faCogs } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// قوائم المهارات التقنية
const aiStack = [
    "Python",
    "PyTorch",
    "TensorFlow",
    "OpenCV",
    "YOLO",
    "LLM Integration",
    "LangChain",
    "LlamaIndex",
    "Vector Databases",
    "OCR",
    "Anomaly Detection",
    "Deep Learning",
    "Model Deployment"
];

const roboticsStack = [
    "ROS",
    "Robot Kinematics",
    "Motion Planning",
    "Industrial Robots (FR5 / FR10)",
    "Perception-to-Motion Pipelines",
    "Sensor Fusion",
    "Human-Robot Interaction",
    "Safety Systems",
    "Real-Time Control"
];

const industrialStack = [
    "PLC Programming",
    "CNC Systems",
    "Industrial Automation",
    "Embedded Systems",
    "Arduino",
    "Raspberry Pi",
    "Motor Drivers",
    "Load Cells",
    "Industrial Sensors",
    "Electrical Control Panels",
    "Linux Systems",
    "System Integration"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Core Expertise</h1>
            <div className="skills-grid">
                
                {/* قسم الذكاء الاصطناعي */}
                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>Artificial Intelligence Systems</h3>
                    <p>
                        Design and deployment of production-level AI systems including
                        computer vision pipelines, anomaly detection models,
                        and LLM-driven reasoning architectures. Experienced in
                        integrating AI into real-world robotic and industrial environments.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Technologies:</span>
                        {aiStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* قسم الروبوتات */}
                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>Robotics & Intelligent Integration</h3>
                    <p>
                        AI-to-robot integration using ROS-based architectures.
                        Development of vision-guided robotic systems including
                        calligraphy robots, AI-powered coffee serving robots,
                        and interactive XO game robots with real-time execution.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Technologies:</span>
                        {roboticsStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* قسم الأتمتة الصناعية */}
                <div className="skill">
                    <FontAwesomeIcon icon={faCogs} size="3x" />
                    <h3>Industrial Automation & Embedded Systems</h3>
                    <p>
                        End-to-end industrial system development combining hardware,
                        embedded programming, and automation control. Experience
                        building CNC machines, PLC-controlled production lines,
                        and AI-powered safety monitoring systems.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Technologies:</span>
                        {industrialStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;

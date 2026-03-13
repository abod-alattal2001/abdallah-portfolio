import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history" className="timeline-container">
      <div className="items-container">
        <h1>Professional Experience</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#0f172a', color: 'white', border: '1px solid #7aa2ff' }}
            contentArrowStyle={{ borderRight: '7px solid #7aa2ff' }}
            date="2025 – Present"
            iconStyle={{ background: '#7aa2ff', color: 'white', boxShadow: '0 0 15px #7aa2ff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Officer</h3>
            <h4 className="vertical-timeline-element-subtitle">NatHealth – Jordan</h4>
            <p>
              Designed and deployed production-level AI fraud detection systems 
              integrating ML models with LLM reasoning layers. Built intelligent 
              invoice validation pipelines (OCR + entity recognition) and automated 
              risk monitoring systems.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 – 2025"
            contentStyle={{ background: '#0f172a', color: 'white', border: '1px solid #7aa2ff' }}
            contentArrowStyle={{ borderRight: '7px solid #7aa2ff' }}
            iconStyle={{ background: '#7aa2ff', color: 'white', boxShadow: '0 0 15px #7aa2ff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI & Robotics Integration Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Cyber Robot – Industrial Robotics</h4>
            <p>
              Integrated AI systems into industrial robotic platforms (FR5 / FR10). 
              Developed vision-guided calligraphy robots, LLM-powered coffee serving robots, 
              and safety-aware robotic systems using real-time human detection.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 – 2024"
            contentStyle={{ background: '#0f172a', color: 'white', border: '1px solid #7aa2ff' }}
            contentArrowStyle={{ borderRight: '7px solid #7aa2ff' }}
            iconStyle={{ background: '#7aa2ff', color: 'white', boxShadow: '0 0 15px #7aa2ff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Founder & Technical Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">CSS – Smart Systems & Education</h4>
            <p>
              Led development of embedded systems and smart automation solutions 
              integrating AI, robotics, and programmable electronics for real-world applications.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 – 2024"
            contentStyle={{ background: '#0f172a', color: 'white', border: '1px solid #7aa2ff' }}
            contentArrowStyle={{ borderRight: '7px solid #7aa2ff' }}
            iconStyle={{ background: '#7aa2ff', color: 'white', boxShadow: '0 0 15px #7aa2ff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">B.Sc. in Artificial Intelligence</h3>
            <h4 className="vertical-timeline-element-subtitle">Zarqa University</h4>
            <p>
              Specialized in machine learning, deep learning, computer vision, 
              and intelligent systems design.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
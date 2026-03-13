// src/App.tsx

import React, { useEffect } from "react";
import { Main, Timeline, Expertise, Project, Contact, Navigation, Footer } from "./components";
import FadeIn from './components/FadeIn';
import { useTheme } from "./context/ThemeContext";

import './index.scss';

function App() {
  const { theme } = useTheme();

  return (
    // إضافة الكلاس هنا أيضاً لضمان السيطرة الكاملة داخل الـ Container
    <div className={`main-container ${theme}-mode`}> 
        <Navigation />
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Timeline/>
            <Project/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Biography from './components/Biography';
import Contact from './components/Contact';
import AnimatedSection from './components/AnimatedSection';
import ScrollProgressBar from './components/ScrollProgressBar';

function App() {
  useEffect(() => {
    // 順利滾動的 CSS 點擊行為
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="App">
      <ScrollProgressBar />
      <Navigation />
      
      {/* Hero Section */}
      <AnimatedSection className="hero-section" animation="scaleIn">
        <div className="hero-background">
          <div className="hero-content">
            <div className="hero-avatar">
              <div className="avatar-circle">
                <span className="avatar-text">陳</span>
              </div>
              <div className="avatar-status">
                <div className="status-dot"></div>
                <span>開放招募中</span>
              </div>
            </div>
            <h1 className="hero-title">
              <span className="hero-greeting">您好，我是</span>
              <span className="hero-name">陳宇凱</span>
            </h1>
            <div className="hero-roles">
              <span className="role-tag primary">軟體工程師</span>
              <span className="role-tag secondary">AR/VR 開發專家</span>
              <span className="role-tag tertiary">Android 開發者</span>
            </div>
            <p className="hero-description">
              具有豐富的軟體開發經驗，專精於 AR/VR 應用與 Android 平台開發。
              熱衷於學習新技術，並致力於創造優質的使用者體驗。
            </p>
            <div className="hero-actions">
              <button 
                className="btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                查看作品集
              </button>
              <button 
                className="btn-secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                聯絡我
              </button>
            </div>
          </div>
          <div className="hero-decoration">
            <div className="floating-element element-1"></div>
            <div className="floating-element element-2"></div>
            <div className="floating-element element-3"></div>
          </div>
        </div>
      </AnimatedSection>

      <div className="main-content">
        <div className="content-wrapper">
          <PersonalInfo />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Biography />
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
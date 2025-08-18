import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.pageYOffset;
      const progress = Math.min((currentProgress / totalHeight) * 100, 100);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 初始計算
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 固定在頂部的進度條 */}
      <div className="scroll-progress-container">
        <motion.div
          className="scroll-progress-bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrollProgress / 100 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        />
      </div>
      
      {/* 圓形進度指示器 - 右下角 */}
      <motion.div
        className="scroll-progress-circle"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrollProgress > 5 ? 1 : 0,
          scale: scrollProgress > 5 ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg width="60" height="60" className="progress-ring">
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="50%" stopColor="#764ba2" />
              <stop offset="100%" stopColor="#f093fb" />
            </linearGradient>
          </defs>
          <circle
            className="progress-ring-background"
            cx="30"
            cy="30"
            r="26"
          />
          <motion.circle
            className="progress-ring-progress"
            cx="30"
            cy="30"
            r="26"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: scrollProgress / 100 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            style={{
              strokeDasharray: 163.36,
              strokeDashoffset: 163.36 - (163.36 * scrollProgress / 100)
            }}
          />
        </svg>
        <div className="progress-percentage">
          {Math.round(scrollProgress)}%
        </div>
      </motion.div>
    </>
  );
};

export default ScrollProgressBar;
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('personal');
  const [isVisible, setIsVisible] = useState(false);

  const navItems = useMemo(() => [
    { id: 'personal', label: '個人資料', icon: '👤' },
    { id: 'skills', label: '專長技能', icon: '💻' },
    { id: 'experience', label: '工作經驗', icon: '💼' },
    { id: 'projects', label: '專案作品', icon: '🚀' },
    { id: 'education', label: '學歷', icon: '🎓' },
    { id: 'biography', label: '個人簡介', icon: '📝' },
    { id: 'contact', label: '聯絡方式', icon: '📞' }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      // 顯示導航 - 當滾動超過 50px 時顯示
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 50;
      
      // 調試日志
      if (process.env.NODE_ENV === 'development') {
        console.log('Navigation - scrollY:', scrollY, 'isVisible:', shouldShow);
      }
      
      setIsVisible(shouldShow);
      
      // 檢測當前可見的區段
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50"
          style={{
            position: 'fixed',
            right: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1001
          }}
        >
          {/* 導航容器 */}
          <div
            className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(16px)',
              borderRadius: '1rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              width: '60px',
              padding: '8px'
            }}
          >
            {/* 導航項目 */}
            <div className="py-2 space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-lg">{item.icon}</span>
                  
                  {/* 活動指示器 */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
import React from 'react';
import AnimatedSection from './AnimatedSection';

const PersonalInfo = () => {
  const personalData = [
    { 
      icon: '👤', 
      label: '姓名', 
      value: '陳宇凱', 
      type: 'name',
      color: 'from-blue-500 to-purple-600'
    },
    { 
      icon: '🎂', 
      label: '年齡', 
      value: '28 歲', 
      type: 'age',
      color: 'from-green-500 to-teal-600'
    },
    { 
      icon: '📱', 
      label: '聯絡電話', 
      value: '0961-567-552', 
      type: 'phone',
      color: 'from-orange-500 to-red-600'
    },
    { 
      icon: '✉️', 
      label: 'E-mail', 
      value: 'win94046@gmail.com', 
      type: 'email',
      color: 'from-purple-500 to-pink-600'
    },
    { 
      icon: '💼', 
      label: '期望職位', 
      value: '軟體工程師', 
      type: 'position',
      color: 'from-indigo-500 to-blue-600'
    },
    { 
      icon: '📍', 
      label: '期望工作地點', 
      value: '台南市或新竹區', 
      type: 'location',
      color: 'from-teal-500 to-green-600'
    },
    { 
      icon: '⏰', 
      label: '期望工作性質', 
      value: '全職工作', 
      type: 'type',
      color: 'from-yellow-500 to-orange-600'
    },
    { 
      icon: '📅', 
      label: '可上班日期', 
      value: '一個月可上班', 
      type: 'availability',
      color: 'from-pink-500 to-purple-600'
    }
  ];

  const handleContact = (type, value) => {
    switch (type) {
      case 'phone':
        window.open(`tel:${value}`);
        break;
      case 'email':
        window.open(`mailto:${value}`);
        break;
      default:
        break;
    }
  };

  return (
    <AnimatedSection id="personal" className="section">
      <div className="section-header">
        <h2 className="section-title">個人資料</h2>
        <p className="section-subtitle">基本資訊與聯絡方式</p>
      </div>
      
      <div className="personal-info-grid">
        {personalData.map((item, index) => (
          <div 
            key={item.label}
            className={`personal-info-card ${
              item.type === 'phone' || item.type === 'email' ? 'clickable' : ''
            }`}
            onClick={() => handleContact(item.type, item.value)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`info-icon bg-gradient-to-r ${item.color}`}>
              {item.icon}
            </div>
            <div className="info-content">
              <h3 className="info-label">{item.label}</h3>
              <p className="info-value">{item.value}</p>
            </div>
            {(item.type === 'phone' || item.type === 'email') && (
              <div className="contact-indicator">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default PersonalInfo;
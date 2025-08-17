import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const skillCategories = [
    {
      title: '程式語言',
      icon: '💻',
      skills: [
        { name: 'C#', level: 90, color: 'from-purple-500 to-purple-700' },
        { name: 'Python', level: 85, color: 'from-blue-500 to-blue-700' },
        { name: 'PHP', level: 80, color: 'from-indigo-500 to-indigo-700' },
        { name: 'HTML', level: 95, color: 'from-orange-500 to-orange-700' },
        { name: 'Kotlin', level: 88, color: 'from-green-500 to-green-700' },
        { name: 'Java', level: 85, color: 'from-red-500 to-red-700' }
      ]
    },
    {
      title: '開發環境',
      icon: '🔧',
      skills: [
        { name: 'Unity', level: 92, color: 'from-gray-600 to-gray-800' },
        { name: 'Visual Studio', level: 90, color: 'from-purple-500 to-purple-700' },
        { name: 'VS Code', level: 95, color: 'from-blue-500 to-blue-700' },
        { name: 'Android Studio', level: 88, color: 'from-green-500 to-green-700' },
        { name: '.NET', level: 85, color: 'from-indigo-500 to-indigo-700' }
      ]
    },
    {
      title: '開發工具與框架',
      icon: '🛠️',
      skills: [
        { name: 'Jetpack Compose', level: 85, color: 'from-green-500 to-green-700' },
        { name: 'Android XML', level: 90, color: 'from-blue-500 to-blue-700' },
        { name: 'Gradle', level: 80, color: 'from-gray-500 to-gray-700' },
        { name: 'Maven', level: 75, color: 'from-yellow-500 to-yellow-700' },
        { name: 'Retrofit', level: 85, color: 'from-purple-500 to-purple-700' },
        { name: 'Git', level: 90, color: 'from-orange-500 to-orange-700' },
        { name: 'Room Database', level: 82, color: 'from-teal-500 to-teal-700' },
        { name: 'OpenCV', level: 78, color: 'from-red-500 to-red-700' }
      ]
    }
  ];

  const softSkills = [
    { name: '學習力', icon: '🧠', description: '快速學習新技術和工具' },
    { name: '溝通協調', icon: '🤝', description: '良好的團隊合作能力' },
    { name: '邏輯思考', icon: '🧩', description: '系統性問題分析與解決' },
    { name: '跨領域整合', icon: '🔗', description: '整合不同技術領域知識' },
    { name: '積極態度', icon: '⚡', description: '主動積極的工作態度' }
  ];

  const tags = ['Unity3D', 'MySQL', 'Python', 'C#', 'PHP', 'HTML', 'CSS', 'Android', 'Kotlin'];

  return (
    <AnimatedSection id="skills" className="section">
      <div className="section-header">
        <h2 className="section-title">專長技能</h2>
        <p className="section-subtitle">我的技術能力與專業技能展示</p>
      </div>
      
      {skillCategories.map((category, categoryIndex) => (
        <div key={category.title} className="skill-category">
          <h3 className="skill-category-title">
            <span className="skill-icon">{category.icon}</span>
            {category.title}
          </h3>
          <div className="skills-grid">
            {category.skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-item"
                onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className={`skill-fill bg-gradient-to-r ${skill.color}`}
                    style={{ 
                      width: hoveredSkill === `${categoryIndex}-${index}` ? `${skill.level}%` : '0%',
                      transition: 'width 1s ease-out'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="soft-skills-section">
        <h3 className="skill-category-title">
          <span className="skill-icon">💡</span>
          軟實力
        </h3>
        <div className="soft-skills-grid">
          {softSkills.map((skill, index) => (
            <div key={skill.name} className="soft-skill-card">
              <div className="soft-skill-icon">{skill.icon}</div>
              <h4 className="soft-skill-name">{skill.name}</h4>
              <p className="soft-skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="tags-section">
        <h3 className="skill-category-title">
          <span className="skill-icon">#</span>
          技術標籤
        </h3>
        <div className="tags-container">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="tech-tag"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
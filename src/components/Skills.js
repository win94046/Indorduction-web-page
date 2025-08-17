import React from 'react';

const Skills = () => {
  const programmingLanguages = ['C#', 'Python', 'PHP', 'HTML', 'Kotlin', 'Java'];
  const developmentTools = ['Unity', 'Visual Studio', 'Visual Studio Code', 'Android Studio', '.NET'];
  const frameworks = ['Jetpack Compose', 'Android XML', 'Gradle', 'Maven', 'Retrofit', 'OkHttp', 'Git', 'Room Database', 'OpenCV'];
  const tags = ['Unity3D', 'MySQL', 'Python', 'C#', 'PHP', 'HTML', 'CSS', 'Android', 'Kotlin'];

  return (
    <section className="section">
      <h2>專長</h2>
      
      <h3>程式語言</h3>
      <div className="skills-container">
        {programmingLanguages.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>

      <h3>開發環境</h3>
      <div className="skills-container">
        {developmentTools.map((tool, index) => (
          <span key={index} className="skill-tag">{tool}</span>
        ))}
      </div>

      <h3>開發工具與框架</h3>
      <div className="skills-container">
        {frameworks.map((framework, index) => (
          <span key={index} className="skill-tag">{framework}</span>
        ))}
      </div>

      <h3>其他能力</h3>
      <div className="info-item">
        學習力佳、溝通協調力、邏輯思考力、跨領域整合力、並具積極的工作態度
      </div>

      <h3>相關標籤</h3>
      <div className="skills-container">
        {tags.map((tag, index) => (
          <span key={index} className="skill-tag">#{tag}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
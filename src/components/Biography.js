import React from 'react';
import AnimatedSection from './AnimatedSection';

const Biography = () => {
  return (
    <AnimatedSection id="biography" className="section">
      <h2>自傳</h2>
      <div style={{lineHeight: '1.8', fontSize: '1.1rem'}}>
        <p style={{marginBottom: '20px'}}>
          我畢業於東華大學多媒體與互動科技研究所 (MIT LAB) 碩士。碩士期間，我參與開發 AR/VR 遊戲，並在 <strong>Google Play 趨勢應用程式中排名第八</strong>。此外，我還擔任科技部專案負責人，開發了擴增實境 (AR) 軟體。
        </p>
        
        <p style={{marginBottom: '20px'}}>
          我專注於使用 <strong>C# 在 Unity 遊戲引擎上開發擴增實境 (AR) 應用程式</strong>，並具有使用 PHP 框架 <strong>Laravel 進行前端和後端開發的經驗</strong>。在碩士期間，我修習了多門資訊相關課程，包括人工智慧 (AI)、區塊鏈和系統開發。大學期間，我主修數學，在此期間磨練了我的邏輯思考能力，提升了分析問題和快速學習新技術的能力。
        </p>
        
        <p style={{marginBottom: '20px'}}>
          我的碩士論文題目為「基於擴增實境的互動式英文學習 App 捷生成系統」。該系統利用 AR/VR 技術提升學生的專注力。它整合了 Laravel 來創建題目生成網站，並使用 Unity 開發教學應用程式，使教師能夠根據課程自定義基於 AR 的英語練習，營造互動式學習環境。
        </p>
        
        <p>
          目前，我擔任軟體工程師，專注於 MR/AR 軟體開發和 Android 應用程式開發。我致力於持續學習和創新，旨在整合 AI、AR/VR 和行動應用程式技術，開發更智能和互動的軟體解決方案。
        </p>
      </div>
    </AnimatedSection>
  );
};

export default Biography;
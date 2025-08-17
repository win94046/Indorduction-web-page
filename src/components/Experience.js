import React from 'react';
import AnimatedSection from './AnimatedSection';

const Experience = () => {
  return (
    <AnimatedSection id="experience" className="section">
      <h2>工作經驗</h2>
      
      <div className="project-card">
        <div className="project-title">軟體工程師 - 翔宇科技股份有限公司</div>
        <div className="project-meta">台南市 | 2~3 年工作經驗 | 管理4人以下</div>
      </div>

      <h3>MR/AR 軟體開發 (2020/7 ~ 至今)</h3>
      <div className="info-item">
        <ul style={{marginLeft: '20px', marginTop: '10px'}}>
          <li>使用 Unity 開發虛擬實境 (VR) 互動軟體</li>
          <li>部署在 HoloLens2、RealWear 等頭戴式裝置上</li>
          <li>整合 AI 偵測、即時視訊串流、3D 虛擬物件互動功能</li>
          <li>應用於偵測、定位現場工安問題</li>
          <li>使用 Retrofit API 與伺服器進行資料交換</li>
          <li>使用 WebRTC 實現即時視訊串流功能</li>
          <li>完成動態加載 3D 模型，實現快捷式開發</li>
          <li>協助解決使用者執行功能時所發生的問題</li>
        </ul>
      </div>

      <h3>Mobile/Windows Application 開發 (2023/6 ~ 至今)</h3>
      <div className="info-item">
        <ul style={{marginLeft: '20px', marginTop: '10px'}}>
          <li>使用 Android Studio 開發巡檢應用程式</li>
          <li>支援 Android / Windows 手機、平板及電腦</li>
          <li>整合 AI 偵測、QR Code 掃描及資料庫管理</li>
          <li>使用 Jetpack Compose 進行 UI 設計</li>
          <li>使用 Android XML 進行舊版 UI 開發，並以 Jetpack Compose 重構 UI</li>
          <li>使用 OkHttp API 與伺服器進行資料交換</li>
          <li>使用 Maven、Gradle 進行 APK 部署及檔案管理</li>
          <li>串接 AI 偵測元件，進行相關內容檢測</li>
          <li>導入 Zxing 實現 QR Code 掃描辨識功能</li>
          <li>使用 Room Database 處理應用程式內部資料</li>
          <li>運用 Android Profiler 及 LeakCanary 進行記憶體管理</li>
          <li>使用 KMP (Kotlin Multiplatform) 開發跨平台應用程式</li>
        </ul>
      </div>

      <h3>專案協作與管理</h3>
      <div className="info-item">
        <ul style={{marginLeft: '20px', marginTop: '10px'}}>
          <li>規劃並串接技術文件，使用第三方 API，並與後援團隊協作開發</li>
          <li>規劃專案並管理跨團隊協作工作內容及時程</li>
          <li>負責管理專案協作，包括進度追蹤、任務分配及開發整合</li>
        </ul>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
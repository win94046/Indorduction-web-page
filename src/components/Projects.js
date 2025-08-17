import React from 'react';
import AnimatedSection from './AnimatedSection';

const Projects = () => {
  const projects = [
    {
      title: "工安檢測智能 APP (需伺服器串接)",
      period: "2024/8~2024/10",
      platform: "Mobile / Tablet / Realwear (Android Studio)",
      description: "以 APP 取代傳統紙本模式，使用者可在伺服器上建立專案，並於 APP 同步加載。完成檢測資料後，同步回傳伺服器並可供其他使用者調閱，提升巡檢工作的便利性。",
      responsibilities: [
        "APP 開發：使用 Android Studio，負責專案架構及功能製作",
        "資料庫管理：建立本地端資料庫 (Room Database)，用於儲存使用者在伺服器建立的專案",
        "UI 開發：使用 Jetpack Compose 製作大量自動化 UI",
        "程式架構：以 Kotlin / Java 建立 Active、ViewModel、Voyager-navigator",
        "API 串接：規劃 API 架構，使用 OkHttp、RESTful 進行 API 串接",
        "日誌管理：建立可輸出日誌檔，以利於後續進行異常排除"
      ],
      tech: ["Mobile", "Tablet", "Realwear", "Android", "Room Database", "Jetpack Compose", "Kotlin", "Java", "OkHttp", "RESTful API"],
      youtubeLink: "https://youtu.be/H25H9cgaRSk?si=Qp2ajVVTs1vvd7je&t=37"
    },
    {
      title: "VR 智慧化巡檢系統 (Unity)",
      period: "2022/12~2023/3",
      platform: "Hololens2 (Unity)",
      description: "於 Hololens2 上，使用者可在 AR/MR 場域中以手勢進行走動及選取模式，並操作 3D 物件互動。串接 AI 輔助系統，輔助使用者操作，並可從伺服器上接收資料，所有資料可動態加載。",
      responsibilities: [
        "Unity APP 開發：使用 MRTK 進行 3D 物件互動及程式開發",
        "資料庫管理：以 SQLite 儲存使用者執行資料，並與伺服器進行資料同步",
        "UI 開發：使用 Unity 內建 UI 及 Unity Shader",
        "程式架構：C#、Java 程式碼生成 AAR 進行程式控制",
        "API 串接：規劃 RESTful API，並與其他部門串接",
        "視訊傳輸：使用 WebRTC 擷取影像並上傳至伺服器",
        "日誌管理：建立可輸出日誌檔，以利於後續進行異常排除"
      ],
      tech: ["Hololens2", "Unity", "Unity Shader", "MRTK", "SQLite", "C#", "Java", "RESTful API"],
      youtubeLink: "https://www.youtube.com/watch?v=IKu6BE2pks0"
    },
    {
      title: "工安檢測智能 APP (不須網路)",
      period: "2024/9 ~ 至今",
      platform: "Mobile / Tablet / Realwear (Android Studio)",
      description: "讓使用者在 APP 內自行建立專案，並開啟自動專案，所有操作皆在 APP 內完成。可匯出或匯入執行後的 Excel 或 CSV 檔案。",
      responsibilities: [
        "APP 開發：使用 Android Studio，負責功能及介面製作",
        "資料庫管理：以 Room Database 進行資料管理",
        "UI 開發：使用 Jetpack Compose 製作多功能支援的自動化 UI",
        "程式架構：使用 Kotlin / Java，建立 Active、ViewModel、Voyager-navigator",
        "日誌管理：建立可輸出日誌檔，以利於後續進行異常排除及效能優化"
      ],
      tech: ["Mobile", "Tablet", "Realwear", "Android", "Room Database", "Jetpack Compose", "Kotlin", "Java"],
      youtubeLink: "https://youtube.com/shorts/9Tp4nbCn3wU?si=jWCSa4P3-zF1x6r3"
    },
    {
      title: "基於擴增實境的互動式英文學習 App 捷生成系統",
      period: "2020/9~2021/7",
      platform: "AR/VR",
      description: "開發一個易上手的 AR 學習系統，使用者可在網站上建立題目，再於 APP 上做題。並可錄入使用者聲音，生成使用者發音圖來開啟學習。該系統 leverages AR/VR 技術以提升學生的專注力。",
      responsibilities: [
        "整合 Laravel 以創建題目生成網站，並使用 Unity 開發教學應用程式",
        "使教師能夠根據課程自定義基於 AR 的英語練習，營造互動式學習環境"
      ],
      tech: ["AR", "VR", "Unity", "Laravel"],
      youtubeLink: "https://www.youtube.com/watch?v=BD0LYOHVE7M"
    },
    {
      title: "動物大遷徙 AR/VR 互動App",
      period: "2018/10~2019/3",
      platform: "AR/VR",
      description: "開發一款基於 AR 的 AR 互動 APP，主要開發 AR 解題功能。3D 動物 AR 繪圖，實現 2D 畫畫轉 3D 可觀看型功能。於 2019 年 2 月 GoogleStore 門 App 留名。",
      responsibilities: [
        "開發 AR 解題功能",
        "實現 2D 畫畫轉 3D 可觀看功能",
        "3D 動物 AR 繪圖開發"
      ],
      tech: ["AR", "VR", "Unity", "3D Graphics"],
      youtubeLink: "https://www.youtube.com/watch?v=fLh5Jn40osg&t=172s"
    }
  ];

  return (
    <AnimatedSection id="projects" className="section">
      <h2>專案經驗</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-title">{project.title}</div>
          <div className="project-meta">{project.period} | {project.platform}</div>
          <p style={{margin: '15px 0'}}>{project.description}</p>
          
          <h4 style={{color: '#667eea', marginBottom: '10px'}}>負責項目：</h4>
          <ul style={{marginLeft: '20px', marginBottom: '15px'}}>
            {project.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
          
          <div className="project-tech">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>
          
          {project.youtubeLink && (
            <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer" className="youtube-link">
              觀看 YouTube 影片
            </a>
          )}
        </div>
      ))}
    </AnimatedSection>
  );
};

export default Projects;
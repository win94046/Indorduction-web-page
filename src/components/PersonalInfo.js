import React from 'react';

const PersonalInfo = () => {
  return (
    <section className="section">
      <h2>個人資料</h2>
      <div className="info-grid">
        <div className="info-item">
          <strong>姓名：</strong>陳宇凱
        </div>
        <div className="info-item">
          <strong>年齡：</strong>28 歲
        </div>
        <div className="info-item">
          <strong>聯絡電話：</strong>0961-567-552
        </div>
        <div className="info-item">
          <strong>E-mail：</strong>win94046@gmail.com
        </div>
        <div className="info-item">
          <strong>期望職位：</strong>軟體工程師
        </div>
        <div className="info-item">
          <strong>期望工作地點：</strong>台南市或新竹區
        </div>
        <div className="info-item">
          <strong>期望工作性質：</strong>全職工作
        </div>
        <div className="info-item">
          <strong>可上班日期：</strong>一個月可上班
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
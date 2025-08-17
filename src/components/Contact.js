import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="contact-info">
      <h2>聯絡資訊</h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px'}}>
        <div>
          <h3>📧 Email</h3>
          <p>win94046@gmail.com</p>
        </div>
        <div>
          <h3>📱 電話</h3>
          <p>0961-567-552</p>
          <p style={{fontSize: '0.9rem', opacity: '0.8'}}>聯絡時間：08:00~23:00</p>
        </div>
        <div>
          <h3>🏠 室內電話</h3>
          <p>(06)215-4540</p>
        </div>
        <div>
          <h3>📍 期望工作地點</h3>
          <p>台南市或新竹區</p>
        </div>
      </div>
      <div style={{marginTop: '30px', padding: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px'}}>
        <p style={{fontSize: '1.1rem', marginBottom: '10px'}}>
          <strong>期望職位：</strong>軟體工程師
        </p>
        <p style={{fontSize: '1.1rem', marginBottom: '10px'}}>
          <strong>期望薪資：</strong>面議
        </p>
        <p style={{fontSize: '1.1rem'}}>
          <strong>可上班日期：</strong>一個月可上班
        </p>
      </div>
    </div>
  );
};

export default Contact;
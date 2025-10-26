---
title: 在线演示
sidebar: false
editLink: false
lastUpdated: false
prev: false
next: false
---

<div class="demo-container"> 
    <div class="demo-info">
      <h2>产品演示</h2>
      <div class="demo-credentials">
        <div class="credential-item">
          <span class="credential-label">账号:<span class="credential-value">pix</span></span>
        </div>
        <div class="credential-item">
          <span class="credential-label">密码:<span class="credential-value">123456</span></span>
        </div>
      </div>
      <p class="demo-tip">提示: 使用上方提供的测试账号登录体验完整功能</p>
    </div>
    <div class="demo-actions">
      <a href="https://demo.ispace.rcep.link/app/desktop/home" target="_blank" class="demo-button primary">
        立即进入演示
      </a> 
    </div> 
</div>


<style scoped>
.demo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.demo-header {
  margin-bottom: 3rem;
}

.demo-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.demo-header p {
  font-size: 1.1rem;
  color: #7f8c8d;
}

.demo-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 3rem;
  transition: transform 0.3s ease;
}

.demo-card:hover {
  transform: translateY(-5px);
}

.demo-info h2 {
  color: #34495e;
  margin-bottom: 1.5rem;
}

.demo-credentials {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
  flex-wrap: wrap;
}

.credential-item {
  margin: 0 1rem;
  text-align: left;
}

.credential-label {
  display: block;
  font-weight: bold;
  color: #7f8c8d;
  margin-bottom: 0.3rem;
}

.credential-value {
  display: inline-block;
  background: #f8f9fa;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-family: monospace;
  color: #e74c3c;
  font-weight: bold;
}

.demo-tip {
  color: #95a5a6;
  font-style: italic;
  margin-top: 1.5rem;
}

.demo-actions {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.demo-button {
  padding: 0.8rem 2rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  border: none;
  font-size: 1rem;
}

.demo-button.primary {
  background: #3498db;
  color: white;
}

.demo-button.primary:hover {
  background: #2980b9;
  transform: translateY(-2px);
}

.demo-button.secondary {
  background: #ecf0f1;
  color: #2c3e50;
}

.demo-button.secondary:hover {
  background: #bdc3c7;
  transform: translateY(-2px);
}

.demo-features {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  flex-wrap: wrap;
  gap: 2rem;
}

.feature-item {
  flex: 1;
  min-width: 200px;
  max-width: 300px;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-item h3 {
  color: #34495e;
  margin-bottom: 0.8rem;
}

.feature-item p {
  color: #7f8c8d;
  line-height: 1.6;
}

.qr-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.qr-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  text-align: center;
}

.qr-content h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.qr-placeholder {
  margin: 1.5rem 0;
}

.qr-code {
  width: 200px;
  height: 200px;
  margin: 0 auto 1rem;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-button {
  margin-top: 1.5rem;
  padding: 0.6rem 1.5rem;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.close-button:hover {
  background: #c0392b;
}

@media (max-width: 768px) {
  .demo-container {
    padding: 1rem;
  }
  
  .demo-header h1 {
    font-size: 2rem;
  }
  
  .demo-card {
    padding: 1.5rem;
  }
  
  .demo-actions {
    flex-direction: column;
  }
  
  .demo-button {
    width: 100%;
  }
}
</style>
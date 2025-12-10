// ========== 配置区域 ==========
// iconfont配置
const ICONFONT_CSS = '//at.alicdn.com/t/c/font_5084716_0awyevh2l91p.css';
const ICONFONT_JS = '//at.alicdn.com/t/c/font_5084716_0awyevh2l91p.js';
// ========================================

export default {
  async fetch() {
    const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>eooce 小钢炮</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg t='1765295778625' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='1759' width='200' height='200'%3E%3Cpath d='M972.868267 76.202667a33.5872 33.5872 0 0 0-25.070934-25.070934c-183.3472-42.120533-383.351467 8.004267-525.858133 150.510934a560.9472 560.9472 0 0 0-55.415467 64.631466c-4.7616 6.485333-11.5712 10.973867-19.370666 12.9024-74.4448 18.432-146.158933 57.326933-205.704534 116.872534a450.338133 450.338133 0 0 0-69.0688 88.814933c-16.2816 27.4944 11.6224 59.921067 41.591467 48.8448 47.291733-17.476267 98.389333-26.0608 151.057067-26.094933-0.733867 4.488533-1.792 8.925867-2.423467 13.4144a2271.232 2271.232 0 0 0 115.592533 124.7744 2265.070933 2265.070933 0 0 0 124.7744 115.592533c4.488533-0.631467 8.925867-1.6896 13.397334-2.423467-0.034133 52.667733-8.618667 103.765333-26.094934 151.057067-11.076267 29.969067 21.3504 57.873067 48.8448 41.591467a450.440533 450.440533 0 0 0 88.832-69.0688c59.528533-59.528533 98.423467-131.259733 116.855467-205.687467 1.928533-7.799467 6.434133-14.609067 12.9024-19.370667a560.9472 560.9472 0 0 0 64.631467-55.415466c142.523733-142.5408 192.648533-342.528 150.528-525.8752zM743.185067 442.043733a114.005333 114.005333 0 1 1-161.245867-161.245866 114.005333 114.005333 0 0 1 161.245867 161.245866z' fill='%23707070' p-id='1760'%3E%3C/path%3E%3Cpath d='M183.483733 689.493333C148.923733 724.053333 2.4064 938.1888 44.117333 979.899733c41.710933 41.710933 255.8464-104.823467 290.4064-139.3664 34.56-34.56 28.757333-96.375467-12.9536-138.069333-41.710933-41.728-103.543467-47.530667-138.0864-12.970667z' fill='%23707070' p-id='1761'%3E%3C/path%3E%3C/svg%3E">
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${ICONFONT_CSS}">
  <script src="${ICONFONT_JS}"><\/script>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      min-height: 100vh;
      background: linear-gradient(180deg, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%);
      color: #2e7d32;
      position: relative;
      overflow-x: hidden;
      padding: 20px;
    }
    /* 阳光光斑效果 */
    .sunlight {
      position: fixed;
      top: -100px;
      right: -100px;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(255,235,59,0.3) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
    }
    .sunlight2 {
      position: fixed;
      top: 20%;
      left: 10%;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(255,235,59,0.15) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      animation: float 6s ease-in-out infinite;
    }
    /* 飘落的树叶 */
    .leaves {
      position: fixed;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
    }
    .leaf {
      position: absolute;
      font-size: 20px;
      opacity: 0;
      animation: falling linear infinite;
      top: -50px;
    }

    @keyframes falling {
      0% { transform: translateY(0) rotate(0deg); opacity: 0; }
      5% { opacity: var(--leaf-opacity, 0.6); }
      95% { opacity: var(--leaf-opacity, 0.6); }
      100% { transform: translateY(calc(100vh + 50px)) rotate(360deg); opacity: 0; }
    }
    @keyframes float {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(20px, 10px); }
    }
    .container {
      max-width: 1400px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 8px 32px rgba(46, 125, 50, 0.15);
      border: 2px solid rgba(129, 199, 132, 0.5);
      position: relative;
      z-index: 1;
    }
    .header {
      position: relative;
      margin-bottom: 30px;
    }
    h1 {
      text-align: center;
      color: #1b5e20;
      font-size: 28px;
      font-weight: 700;
    }
    .header-btns {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      gap: 10px;
    }
    .clear-btn {
      padding: 8px 16px;
      background: rgba(239, 83, 80, 0.1);
      color: #ef5350;
      border: 2px solid #ef5350;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }
    .clear-btn:hover {
      background: #ef5350;
      color: #fff;
    }
    .paste-btn {
      padding: 8px 16px;
      background: rgba(66, 165, 245, 0.1);
      color: #42a5f5;
      border: 2px solid #42a5f5;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }
    .paste-btn:hover {
      background: #42a5f5;
      color: #fff;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 1024px) {
      .grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 768px) {
      .grid { grid-template-columns: 1fr; }
      .sunlight { width: 250px; height: 250px; }
    }
    .section {
      background: rgba(255, 255, 255, 0.8);
      border-radius: 16px;
      padding: 22px;
      border: 2px solid rgba(165, 214, 167, 0.6);
      box-shadow: 0 4px 12px rgba(46, 125, 50, 0.08);
      transition: all 0.3s;
    }
    .section:hover {
      border-color: #66bb6a;
      box-shadow: 0 8px 24px rgba(46, 125, 50, 0.15);
    }
    .section-title {
      font-size: 18px;
      font-weight: 700;
      color: #2e7d32;
      margin-bottom: 16px;
      padding-bottom: 10px;
      border-bottom: 2px solid rgba(165, 214, 167, 0.5);
    }
    .section-title .iconfont {
      font-size: 22px;
      margin-right: 6px;
      font-weight: normal !important;
    }
    .iconfont {
      font-weight: normal !important;
    }
    .section-title .icon-cloudflare2 {
      font-size: 30px;
    }
    .form-group { margin-bottom: 16px; }
    .form-row { display: flex; gap: 12px; }
    .form-row .form-group { flex: 1; }
    label {
      display: block;
      margin-bottom: 6px;
      color: #333;
      font-weight: 600;
      font-size: 14px;
    }
    input {
      width: 100%;
      padding: 10px 14px;
      border: 2px solid #a5d6a7;
      border-radius: 10px;
      font-size: 15px;
      transition: all 0.3s;
      background: #fff;
      color: #333;
    }
    input::placeholder { color: #999; }
    input:focus { 
      outline: none; 
      border-color: #66bb6a;
      box-shadow: 0 0 0 4px rgba(102, 187, 106, 0.2);
    }
    input.filled {
      border-color: #43a047;
      background: rgba(67, 160, 71, 0.1);
      font-weight: 600;
    }
    /* 覆盖浏览器自动填充样式 */
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 1000px #e8f5e9 inset !important;
      -webkit-text-fill-color: #333 !important;
      border-color: #43a047 !important;
      transition: background-color 5000s ease-in-out 0s;
    }
    input.filled:-webkit-autofill,
    input.filled:-webkit-autofill:hover,
    input.filled:-webkit-autofill:focus,
    input.filled:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 1000px #e8f5e9 inset !important;
    }
    /* 检测自动填充的动画 */
    @keyframes onAutoFillStart { from {} to {} }
    input:-webkit-autofill { animation-name: onAutoFillStart; }
    /* 禁用状态的输入框样式 */
    input:disabled {
      background: #f0f0f0;
      border-color: #ccc;
      color: #999;
      cursor: not-allowed;
    }
    .hint { font-size: 12px; color: #666; margin-top: 4px; }
    .btn-area {
      grid-column: 1 / -1;
      text-align: center;
      margin-top: 10px;
    }
    .btn {
      padding: 16px 60px;
      background: linear-gradient(135deg, #66bb6a, #43a047);
      color: #fff;
      border: none;
      border-radius: 30px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 4px 15px rgba(67, 160, 71, 0.3);
    }
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(67, 160, 71, 0.4);
    }
    .btn:active {
      transform: translateY(0);
    }
    .btn-sm {
      padding: 10px 16px;
      font-size: 14px;
      border-radius: 20px;
    }
    .result {
      grid-column: 1 / -1;
      margin-top: 20px;
      padding: 24px;
      background: rgba(1, 22, 39, 0.9);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      display: none;
      border: 2px solid rgba(129, 199, 132, 0.5);
    }
    .result-label { color: rgba(255, 255, 255, 0.6); font-size: 14px; margin-bottom: 12px; }
    .result-cmd {
      color: #40FA8D;
      font-family: 'Consolas', 'Monaco', monospace;
      font-size: 15px;
      word-break: break-all;
      line-height: 1.7;
      white-space: pre-wrap;
      cursor: pointer;
      padding: 12px;
      border-radius: 8px;
      transition: background 0.3s;
    }
    .result-cmd:hover {
      background: rgba(255, 255, 255, 0.1);
    }
    .copy-tip {
      margin-top: 12px;
      color: #40FA8D;
      font-size: 14px;
      opacity: 0;
      transition: opacity 0.3s;
    }
    .copy-tip.show {
      opacity: 1;
    }
    .switch-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 15px;
      color: #333;
    }
    .switch {
      position: relative;
      width: 50px;
      height: 28px;
    }
    .switch input { opacity: 0; width: 0; height: 0; }
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0; left: 0; right: 0; bottom: 0;
      background: #c8e6c9;
      border-radius: 24px;
      transition: 0.3s;
    }
    .slider:before {
      position: absolute;
      content: "";
      height: 22px;
      width: 22px;
      left: 3px;
      bottom: 3px;
      background: #fff;
      border-radius: 50%;
      transition: 0.3s;
    }
    .switch input:checked + .slider { background: #66bb6a; }
    .switch input:checked + .slider:before { transform: translateX(22px); }
  </style>
</head>
<body>
  <div class="sunlight"></div>
  <div class="sunlight2"></div>
  <div class="leaves" id="leaves"></div>

  <div class="container">
    <div class="header">
      <h1>🌳 eooce 王之钢炮 🌳</h1>
      <div class="header-btns">
        <button class="clear-btn" onclick="clearAll()"><i class="iconfont icon-yiqingchugaojing" style="margin-right:4px;"></i>清除</button>
        <button class="paste-btn" onclick="pasteNezha()"><i class="iconfont icon-paste" style="margin-right:4px;"></i>哪吒命令导入</button>
      </div>
    </div>
    <div class="grid">
      <div class="section">
        <div class="section-title"><i class="iconfont icon-gear"></i> 基础配置</div>
        <div class="form-group">
          <label>NAME (节点名称)</label>
          <input type="text" id="name" placeholder="输入节点名称">
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>UUID</label>
            <input type="text" id="uuid" placeholder="输入或生成">
          </div>
          <div class="form-group" style="flex:0 0 auto;display:flex;align-items:flex-end;">
            <button type="button" class="btn btn-sm" onclick="generateUUID()"><i class="iconfont icon-ziyuan"></i></button>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title"><i class="iconfont icon-cloudflare2"></i> CF 优选配置</div>
        <div class="form-group">
          <label>CFIP (优选域名/IP)</label>
          <input type="text" id="cfip" placeholder="默认: cdns.doon.eu.org">
          <div class="hint">默认值: cdns.doon.eu.org</div>
        </div>
        <div class="form-group">
          <label>CFPORT (节点端口)</label>
          <input type="text" id="cfport" placeholder="默认: 443">
          <div class="hint">默认值: 443</div>
        </div>
      </div>

      <div class="section">
        <div class="section-title"><i class="iconfont icon-a-nezha1"></i> 哪吒监控配置</div>
        <div class="form-group">
          <label>NEZHA_SERVER (Agent地址)</label>
          <input type="text" id="nezhaServer" placeholder="v1版本例如: nz.example.com:8008">
        </div>
        <div class="form-group">
          <label>NEZHA_PORT (端口)</label>
          <input type="text" id="nezhaPort" placeholder="v0 版本填写">
          <div class="hint">⚠️ 仅哪吒 v0 版本需要填写，v1 版本无需填写</div>
        </div>
        <div class="form-group">
          <label>NEZHA_KEY (密钥)</label>
          <input type="text" id="nezhaKey" placeholder="输入密钥">
        </div>
      </div>

      <div class="section">
        <div class="section-title"><i class="iconfont icon-mti-suidao"></i> Argo 隧道配置</div>
        <div class="form-group">
          <label class="switch-label">
            <span>禁用 Argo 隧道</span>
            <label class="switch">
              <input type="checkbox" id="disableArgo" onchange="toggleArgoInputs()">
              <span class="slider"></span>
            </label>
          </label>
        </div>
        <div class="form-group">
          <label>ARGO_PORT (隧道端口)</label>
          <input type="text" id="argoPort" placeholder="默认: 8001">
          <div class="hint">默认值: 8001</div>
        </div>
        <div class="form-group">
          <label>ARGO_DOMAIN (隧道域名)</label>
          <input type="text" id="argoDomain" placeholder="输入域名，不填则采用临时隧道">
        </div>
        <div class="form-group">
          <label>ARGO_AUTH (隧道密钥)</label>
          <input type="text" id="argoAuth" placeholder="输入密钥，不填则采用临时隧道" oninput="cleanArgoAuth(this)">
        </div>
      </div>

      <div class="section">
        <div class="section-title"><i class="iconfont icon-ziyuanxhdpi"></i> 直连端口配置</div>
        <div class="form-row">
          <div class="form-group">
            <label>HY2_PORT (hysteria2)</label>
            <input type="text" id="hy2Port" placeholder="输入端口，留空则不启用">
          </div>
          <div class="form-group" style="flex:0 0 auto;display:flex;align-items:flex-end;">
            <button type="button" class="btn btn-sm" onclick="randomPort('hy2Port')"><i class="iconfont icon-ziyuan"></i></button>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>REALITY_PORT (vless-reality)</label>
            <input type="text" id="realityPort" placeholder="输入端口，留空则不启用">
          </div>
          <div class="form-group" style="flex:0 0 auto;display:flex;align-items:flex-end;">
            <button type="button" class="btn btn-sm" onclick="randomPort('realityPort')"><i class="iconfont icon-ziyuan"></i></button>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>TUIC_PORT (tuic-v5)</label>
            <input type="text" id="tuicPort" placeholder="输入端口，留空则不启用">
          </div>
          <div class="form-group" style="flex:0 0 auto;display:flex;align-items:flex-end;">
            <button type="button" class="btn btn-sm" onclick="randomPort('tuicPort')"><i class="iconfont icon-ziyuan"></i></button>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title"><i class="iconfont icon-dingyueguanli"></i> 订阅配置</div>
        <div class="form-group">
          <label>CHAT_ID (Telegram Chat ID)</label>
          <input type="text" id="chatId" placeholder="输入 Telegram Chat ID">
        </div>
        <div class="form-group">
          <label>BOT_TOKEN (Telegram Bot Token)</label>
          <input type="text" id="botToken" placeholder="输入 Telegram Bot Token">
        </div>
        <div class="form-group">
          <label>UPLOAD_URL (订阅上传地址)</label>
          <input type="text" id="uploadUrl" placeholder="Merge-sub 项目首页地址">
          <div class="hint">部署 Merge-sub 项目后的首页地址</div>
        </div>
      </div>

      <div class="btn-area">
        <button class="btn" onclick="generateCommand()"><i class="iconfont icon-fasongchuansong-forward-kuai" style="margin-right:12px;"></i>生成命令</button>
      </div>

      <div class="result" id="result">
        <div class="result-label">安装命令（点击复制）：</div>
        <div class="result-cmd" id="cmdOutput" onclick="copyCommand('cmdOutput')"></div>
        <div class="copy-tip" id="copyTip">🌿 已复制到剪贴板</div>
        <div class="result-label">卸载命令（点击复制）：</div>
        <div class="result-cmd" id="uninstallCmd" onclick="copyCommand('uninstallCmd')">pkill -f '\\.tmp/'</div>
        <div class="copy-tip" id="copyTip2">🌿 已复制到剪贴板</div>
      </div>
    </div>
  </div>

  <script>
    // 监听所有输入框，有内容时添加filled类
    document.querySelectorAll('input[type="text"]').forEach(input => {
      input.addEventListener('input', function() {
        if (this.value.trim()) {
          this.classList.add('filled');
        } else {
          this.classList.remove('filled');
        }
      });
      // 监听自动填充
      input.addEventListener('animationstart', function(e) {
        if (e.animationName === 'onAutoFillStart') {
          this.classList.add('filled');
        }
      });
    });
    
    // 页面加载后检查所有输入框状态
    setTimeout(updateFilledState, 100);

    // 切换Argo隧道输入框的禁用状态
    function toggleArgoInputs() {
      const disabled = document.getElementById('disableArgo').checked;
      const argoInputs = ['argoPort', 'argoDomain', 'argoAuth'];
      argoInputs.forEach(id => {
        const input = document.getElementById(id);
        input.disabled = disabled;
        if (disabled) {
          input.classList.remove('filled');
        } else {
          updateFilledState();
        }
      });
    }

    // 更新所有输入框的filled状态
    function updateFilledState() {
      document.querySelectorAll('input[type="text"]').forEach(input => {
        if (input.value.trim()) {
          input.classList.add('filled');
        } else {
          input.classList.remove('filled');
        }
      });
    }

    // 动态生成100片树叶
    (function() {
      const leavesContainer = document.getElementById('leaves');
      const leafEmojis = ['🍃', '🌿', '🍀', '🌱'];
      const leafCount = 50;
      
      for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        leaf.textContent = leafEmojis[Math.floor(Math.random() * leafEmojis.length)];
        
        // 随机属性
        const left = Math.random() * 100;
        const duration = 10 + Math.random() * 15; // 10-25秒
        const delay = Math.random() * 20; // 0-20秒延迟
        const size = 10 + Math.random() * 24; // 10-34px
        const opacity = 0.3 + Math.random() * 0.5; // 0.3-0.8
        
        leaf.style.left = left + '%';
        leaf.style.animationDuration = duration + 's';
        leaf.style.animationDelay = delay + 's';
        leaf.style.fontSize = size + 'px';
        leaf.style.setProperty('--leaf-opacity', opacity);
        
        leavesContainer.appendChild(leaf);
      }
    })();

    function generateUUID() {
      const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      document.getElementById('uuid').value = uuid;
      updateFilledState();
    }

    function randomPort(id) {
      const port = Math.floor(Math.random() * (65000 - 2000 + 1)) + 2000;
      document.getElementById(id).value = port;
      updateFilledState();
    }

    function cleanArgoAuth(input) {
      let val = input.value;
      val = val.replace(/cloudflared(\\.exe)?\\s+service\\s+install\\s*/gi, '').trim();
      if (val !== input.value) {
        input.value = val;
      }
    }

    function generateCommand() {
      const fields = [
        { id: 'name', key: 'NAME' },
        { id: 'uuid', key: 'UUID' },
        { id: 'cfip', key: 'CFIP' },
        { id: 'cfport', key: 'CFPORT' },
        { id: 'argoPort', key: 'ARGO_PORT' },
        { id: 'argoDomain', key: 'ARGO_DOMAIN' },
        { id: 'argoAuth', key: 'ARGO_AUTH' },
        { id: 'hy2Port', key: 'HY2_PORT' },
        { id: 'realityPort', key: 'REALITY_PORT' },
        { id: 'tuicPort', key: 'TUIC_PORT' },
        { id: 'nezhaServer', key: 'NEZHA_SERVER' },
        { id: 'nezhaPort', key: 'NEZHA_PORT' },
        { id: 'nezhaKey', key: 'NEZHA_KEY' },
        { id: 'chatId', key: 'CHAT_ID' },
        { id: 'botToken', key: 'BOT_TOKEN' },
        { id: 'uploadUrl', key: 'UPLOAD_URL' }
      ];

      let vars = [];
      
      if (document.getElementById('disableArgo').checked) {
        vars.push('DISABLE_ARGO=true');
      }
      
      fields.forEach(f => {
        const val = document.getElementById(f.id).value.trim();
        if (val) {
          vars.push(f.key + '=' + val);
        }
      });

      const cmd = (vars.length ? vars.join(' ') + ' ' : '') + 'bash <(curl -Ls https://main.ssss.nyc.mn/sb.sh)';
      document.getElementById('cmdOutput').textContent = cmd;
      document.getElementById('result').style.display = 'block';
    }

    function copyCommand(elementId) {
      const cmd = document.getElementById(elementId).textContent;
      const tipId = elementId === 'cmdOutput' ? 'copyTip' : 'copyTip2';
      navigator.clipboard.writeText(cmd).then(() => {
        const tip = document.getElementById(tipId);
        tip.classList.add('show');
        setTimeout(() => {
          tip.classList.remove('show');
        }, 2000);
      });
    }

    function clearAll() {
      // 清空所有输入框
      const inputs = ['name', 'uuid', 'cfip', 'cfport', 'nezhaServer', 'nezhaPort', 'nezhaKey', 
                      'argoPort', 'argoDomain', 'argoAuth', 'hy2Port', 'realityPort', 'tuicPort',
                      'chatId', 'botToken', 'uploadUrl'];
      inputs.forEach(id => {
        document.getElementById(id).value = '';
      });
      // 重置开关
      document.getElementById('disableArgo').checked = false;
      // 隐藏命令结果
      document.getElementById('result').style.display = 'none';
      document.getElementById('cmdOutput').textContent = '';
      updateFilledState();
    }

    async function pasteNezha() {
      try {
        const text = await navigator.clipboard.readText();
        // 解析 NZ_SERVER
        const serverMatch = text.match(/NZ_SERVER=([^\\s]+)/);
        if (serverMatch) {
          document.getElementById('nezhaServer').value = serverMatch[1];
        }
        // 解析 NZ_CLIENT_SECRET
        const secretMatch = text.match(/NZ_CLIENT_SECRET=([^\\s]+)/);
        if (secretMatch) {
          document.getElementById('nezhaKey').value = secretMatch[1];
        }
        // 解析 NZ_UUID (可选)
        const uuidMatch = text.match(/NZ_UUID=([^\\s]+)/);
        if (uuidMatch) {
          document.getElementById('uuid').value = uuidMatch[1];
        }
        updateFilledState();
      } catch (err) {
        alert('无法读取剪贴板，请确保已授权剪贴板访问权限');
      }
    }
  <\/script>
</body>
</html>`;

    return new Response(html, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' }
    });
  }
};

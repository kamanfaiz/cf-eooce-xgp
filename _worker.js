/**
 * ============================================================================
 * Cloudflare Worker - eooce 小钢炮配置生成器
 * ============================================================================
 * 
 * 功能说明：
 * - 提供一个可视化的 Web 界面，用于生成 eooce 小钢炮的安装命令
 * - 支持配置：基础设置、CF优选、哪吒监控、Argo隧道、直连端口、订阅等
 * 
 * 文件结构：
 * 1. 配置区域 - 可自定义的常量配置
 * 2. HTML 模板 - 页面结构
 * 3. CSS 样式 - 页面样式（按功能分组）
 * 4. JavaScript - 交互逻辑（按功能分组）
 * 5. Worker 导出 - Cloudflare Worker 入口
 * ============================================================================
 */

// ============================================================================
// 第一部分：配置区域（可根据需要修改）
// ============================================================================

/** iconfont 图标库 */
const ICONFONT_CSS = '//at.alicdn.com/t/c/font_5084716_9zqvemc1l0e.css';
const ICONFONT_JS = '//at.alicdn.com/t/c/font_5084716_9zqvemc1l0e.js';

/** 页面背景图片 URL */
const BACKGROUND_IMAGE = 'https://imgr2.952536.xyz/Hexo/Wallpaper/forest.png';

/** GitHub 仓库链接 */
const GITHUB_URL = 'https://github.com/kamanfaiz/cf-eooce-xgp';

/** 博客链接 */
const BLOG_URL = 'https://blog.faiz.nyc.mn';

// ============================================================================
// 第二部分：CSS 样式模板
// ============================================================================

/**
 * 生成页面 CSS 样式
 * @returns {string} CSS 样式字符串
 */
function generateStyles() {
  return `
    /* ==================== 基础重置 ==================== */
    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    /* ==================== 页面主体 ==================== */
    body {
      font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      min-height: 100vh;
      background: url('${BACKGROUND_IMAGE}') no-repeat center center fixed;
      background-size: cover;
      color: #5c6bc0;
      position: relative;
      overflow-x: hidden;
      padding: 20px;
    }
    
    /* ==================== 容器布局 ==================== */
    .container {
      max-width: 1400px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.75);
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.6);
      position: relative;
      z-index: 1;
    }
    
    /* ==================== 头部区域 ==================== */
    .header {
      position: relative;
      margin-bottom: 30px;
    }
    
    h1 {
      text-align: center;
      color: #3949ab;
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
    
    /* ==================== 头部按钮样式 ==================== */
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
    
    /* ==================== 网格布局 ==================== */
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 24px;
    }
    
    /* 响应式布局 - 平板 */
    @media (max-width: 1024px) {
      .grid { grid-template-columns: 1fr 1fr; }
    }
    
    /* 响应式布局 - 手机 */
    @media (max-width: 768px) {
      .grid { grid-template-columns: 1fr; }
      .sunlight { width: 250px; height: 250px; }
    }
    
    /* ==================== 配置区块样式 ==================== */
    .section {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 16px;
      padding: 22px;
      border: 1px solid rgba(255, 255, 255, 0.8);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      transition: all 0.3s;
    }
    
    .section:hover {
      background: rgba(255, 255, 255, 0.65);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    }
    
    .section-title {
      font-size: 18px;
      font-weight: 700;
      color: #3949ab;
      margin-bottom: 16px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
    
    /* ==================== 表单样式 ==================== */
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
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 8px;
      font-size: 15px;
      transition: all 0.3s;
      background: rgba(255, 255, 255, 0.7);
      color: #333;
    }
    
    input::placeholder { color: #999; }
    
    input:focus { 
      outline: none; 
      border-color: #5c6bc0;
      background: rgba(255, 255, 255, 0.9);
    }
    
    input.filled {
      border-color: #5c6bc0;
      background: rgba(92, 107, 192, 0.08);
      font-weight: 600;
    }
    
    /* 浏览器自动填充样式覆盖 */
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 1000px #e8eaf6 inset !important;
      -webkit-text-fill-color: #333 !important;
      border-color: #5c6bc0 !important;
      transition: background-color 5000s ease-in-out 0s;
    }
    
    input.filled:-webkit-autofill,
    input.filled:-webkit-autofill:hover,
    input.filled:-webkit-autofill:focus,
    input.filled:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 1000px #e8eaf6 inset !important;
    }
    
    /* 自动填充检测动画 */
    @keyframes onAutoFillStart { from {} to {} }
    input:-webkit-autofill { animation-name: onAutoFillStart; }
    
    /* 禁用状态输入框 */
    input:disabled {
      background: #e0e0e0;
      border-color: #aaa;
      color: #666;
      cursor: not-allowed;
    }
    
    .hint { font-size: 12px; color: #666; margin-top: 4px; }
    
    /* ==================== 按钮样式 ==================== */
    .btn-area {
      grid-column: 1 / -1;
      text-align: center;
      margin-top: 10px;
    }
    
    .btn {
      padding: 16px 60px;
      background: linear-gradient(135deg, #ef5350, #5c6bc0);
      color: #fff;
      border: none;
      border-radius: 30px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 4px 15px rgba(92, 107, 192, 0.3);
    }
    
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(92, 107, 192, 0.4);
    }
    
    .btn:active {
      transform: translateY(0);
    }
    
    .btn-sm {
      padding: 10px 16px;
      font-size: 14px;
      border-radius: 20px;
    }
    
    /* ==================== 结果展示区域 ==================== */
    .result {
      grid-column: 1 / -1;
      margin-top: 20px;
      padding: 24px;
      background: rgba(1, 22, 39, 0.85);
      border-radius: 12px;
      display: none;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .result-label { color: rgba(255, 255, 255, 0.6); font-size: 14px; margin-bottom: 12px; margin-top: 20px; }
    .result-label:first-child { margin-top: 0; }
    
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
    
    /* ==================== 底部栏 ==================== */
    .footer {
      padding: 12px 20px;
      color: #ffffffff;
      font-size: 14px;
      text-align: center;
      margin-top: 20px;
    }
    
    .footer a {
      color: inherit;
      text-decoration: none;
      margin: 0 8px;
      transition: opacity 0.3s;
    }
    
    .footer a:hover {
      opacity: 0.7;
    }
    
    .footer .iconfont {
      margin-right: 4px;
    }
    
    /* ==================== 开关组件 ==================== */
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
      background: #c5cae9;
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
    
    .switch input:checked + .slider { background: #5c6bc0; }
    .switch input:checked + .slider:before { transform: translateX(22px); }
    
    /* ==================== 烟花动画效果 ==================== */
    .firework {
      position: fixed;
      pointer-events: none;
      z-index: 9999;
    }
    
    .firework-particle {
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      animation: firework-explode 0.8s ease-out forwards;
    }
    
    @keyframes firework-explode {
      0% { transform: translate(0, 0) scale(1); opacity: 1; }
      100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
    }
  `;
}


// ============================================================================
// 第三部分：HTML 模板
// ============================================================================

/**
 * 生成页面 HTML 结构
 * @returns {string} HTML 字符串
 */
function generateHTML() {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>eooce 小钢炮</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg t='1765295778625' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='1759' width='200' height='200'%3E%3Cpath d='M972.868267 76.202667a33.5872 33.5872 0 0 0-25.070934-25.070934c-183.3472-42.120533-383.351467 8.004267-525.858133 150.510934a560.9472 560.9472 0 0 0-55.415467 64.631466c-4.7616 6.485333-11.5712 10.973867-19.370666 12.9024-74.4448 18.432-146.158933 57.326933-205.704534 116.872534a450.338133 450.338133 0 0 0-69.0688 88.814933c-16.2816 27.4944 11.6224 59.921067 41.591467 48.8448 47.291733-17.476267 98.389333-26.0608 151.057067-26.094933-0.733867 4.488533-1.792 8.925867-2.423467 13.4144a2271.232 2271.232 0 0 0 115.592533 124.7744 2265.070933 2265.070933 0 0 0 124.7744 115.592533c4.488533-0.631467 8.925867-1.6896 13.397334-2.423467-0.034133 52.667733-8.618667 103.765333-26.094934 151.057067-11.076267 29.969067 21.3504 57.873067 48.8448 41.591467a450.440533 450.440533 0 0 0 88.832-69.0688c59.528533-59.528533 98.423467-131.259733 116.855467-205.687467 1.928533-7.799467 6.434133-14.609067 12.9024-19.370667a560.9472 560.9472 0 0 0 64.631467-55.415466c142.523733-142.5408 192.648533-342.528 150.528-525.8752zM743.185067 442.043733a114.005333 114.005333 0 1 1-161.245867-161.245866 114.005333 114.005333 0 0 1 161.245867 161.245866z' fill='%23707070' p-id='1760'%3E%3C/path%3E%3Cpath d='M183.483733 689.493333C148.923733 724.053333 2.4064 938.1888 44.117333 979.899733c41.710933 41.710933 255.8464-104.823467 290.4064-139.3664 34.56-34.56 28.757333-96.375467-12.9536-138.069333-41.710933-41.728-103.543467-47.530667-138.0864-12.970667z' fill='%23707070' p-id='1761'%3E%3C/path%3E%3C/svg%3E">
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${ICONFONT_CSS}">
  <script src="${ICONFONT_JS}"><\/script>
  <style>${generateStyles()}</style>
</head>
<body>
  <div class="container">
    <!-- 页面头部 -->
    <div class="header">
      <h1>🚀 eooce 王之钢炮</h1>
      <div class="header-btns">
        <button class="clear-btn" onclick="clearAll()"><i class="iconfont icon-yiqingchugaojing" style="margin-right:4px;"></i>清除</button>
        <button class="paste-btn" onclick="pasteNezha()"><i class="iconfont icon-paste" style="margin-right:4px;"></i>哪吒命令导入</button>
      </div>
    </div>
    
    <div class="grid">
      ${generateBasicConfigSection()}
      ${generateCFConfigSection()}
      ${generateNezhaConfigSection()}
      ${generateArgoConfigSection()}
      ${generatePortConfigSection()}
      ${generateSubscribeConfigSection()}
      ${generateButtonArea()}
      ${generateResultArea()}
    </div>
  </div>

  <!-- 页面底部 -->
  <footer class="footer">
    Copyright © 2025 Faiz | 
    <a href="${GITHUB_URL}" target="_blank"><i class="iconfont icon-github"></i>GitHub Repository</a> | 
    <a href="${BLOG_URL}" target="_blank"><i class="iconfont icon-book"></i>Faiz博客</a>
  </footer>

  <script>${generateScripts()}<\/script>
</body>
</html>`;
}

// ============================================================================
// 第四部分：表单区块模板
// ============================================================================

/**
 * 基础配置区块 - 节点名称和 UUID
 */
function generateBasicConfigSection() {
  return `
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
      </div>`;
}

/**
 * CF 优选配置区块 - 优选域名/IP 和端口
 */
function generateCFConfigSection() {
  return `
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
      </div>`;
}

/**
 * 哪吒监控配置区块 - Agent 地址、端口和密钥
 */
function generateNezhaConfigSection() {
  return `
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
      </div>`;
}

/**
 * Argo 隧道配置区块 - 隧道端口、域名和密钥
 */
function generateArgoConfigSection() {
  return `
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
      </div>`;
}

/**
 * 直连端口配置区块 - HY2、Reality、TUIC 端口
 */
function generatePortConfigSection() {
  return `
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
      </div>`;
}

/**
 * 订阅配置区块 - Telegram 和订阅上传配置
 */
function generateSubscribeConfigSection() {
  return `
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
      </div>`;
}

/**
 * 生成按钮区域
 */
function generateButtonArea() {
  return `
      <div class="btn-area">
        <button class="btn" onclick="generateCommand()"><i class="iconfont icon-fasongchuansong-forward-kuai" style="margin-right:12px;"></i>生成命令</button>
      </div>`;
}

/**
 * 结果展示区域 - 显示生成的安装/卸载命令
 */
function generateResultArea() {
  return `
      <div class="result" id="result">
        <div class="result-label">安装命令（点击复制）：</div>
        <div class="result-cmd" id="cmdOutput" onclick="copyCommand(event, 'cmdOutput')"></div>
        <div class="result-label">卸载命令（点击复制）：</div>
        <div class="result-cmd" id="uninstallCmd" onclick="copyCommand(event, 'uninstallCmd')">pkill -f '\\.tmp/'</div>
      </div>`;
}


// ============================================================================
// 第五部分：JavaScript 交互逻辑
// ============================================================================

/**
 * 生成页面交互脚本
 * @returns {string} JavaScript 代码字符串
 */
function generateScripts() {
  return `
    // ==================== 初始化 ====================
    
    /**
     * 监听所有输入框，有内容时添加 filled 类以改变样式
     */
    document.querySelectorAll('input[type="text"]').forEach(input => {
      // 监听输入事件
      input.addEventListener('input', function() {
        if (this.value.trim()) {
          this.classList.add('filled');
        } else {
          this.classList.remove('filled');
        }
      });
      
      // 监听浏览器自动填充
      input.addEventListener('animationstart', function(e) {
        if (e.animationName === 'onAutoFillStart') {
          this.classList.add('filled');
        }
      });
    });
    
    // 页面加载后检查所有输入框状态
    setTimeout(updateFilledState, 100);

    // ==================== 表单状态管理 ====================
    
    /**
     * 更新所有输入框的 filled 状态
     */
    function updateFilledState() {
      document.querySelectorAll('input[type="text"]').forEach(input => {
        if (input.value.trim()) {
          input.classList.add('filled');
        } else {
          input.classList.remove('filled');
        }
      });
    }

    /**
     * 切换 Argo 隧道输入框的禁用状态
     */
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

    // ==================== 工具函数 ====================
    
    /**
     * 生成随机 UUID
     */
    function generateUUID() {
      const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      document.getElementById('uuid').value = uuid;
      updateFilledState();
    }

    /**
     * 生成随机端口号 (2000-65000)
     * @param {string} id - 输入框 ID
     */
    function randomPort(id) {
      const port = Math.floor(Math.random() * (65000 - 2000 + 1)) + 2000;
      document.getElementById(id).value = port;
      updateFilledState();
    }

    /**
     * 清理 Argo Auth 输入，移除多余的命令前缀
     * @param {HTMLInputElement} input - 输入框元素
     */
    function cleanArgoAuth(input) {
      let val = input.value;
      val = val.replace(/cloudflared(\\.exe)?\\s+service\\s+install\\s*/gi, '').trim();
      if (val !== input.value) {
        input.value = val;
      }
    }

    // ==================== 命令生成 ====================
    
    /**
     * 生成安装命令
     * 收集所有表单数据，拼接成完整的安装命令
     */
    function generateCommand() {
      // 定义所有配置字段映射
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
      
      // 检查是否禁用 Argo
      if (document.getElementById('disableArgo').checked) {
        vars.push('DISABLE_ARGO=true');
      }
      
      // 收集所有非空字段
      fields.forEach(f => {
        const val = document.getElementById(f.id).value.trim();
        if (val) {
          vars.push(f.key + '=' + val);
        }
      });

      // 拼接最终命令
      const cmd = (vars.length ? vars.join(' ') + ' ' : '') + 'bash <(curl -Ls https://main.ssss.nyc.mn/sb.sh)';
      
      // 显示结果
      document.getElementById('cmdOutput').textContent = cmd;
      document.getElementById('result').style.display = 'block';
    }

    // ==================== 复制功能 ====================
    
    /**
     * 复制命令到剪贴板并触发烟花效果
     * @param {Event} event - 点击事件
     * @param {string} elementId - 要复制内容的元素 ID
     */
    function copyCommand(event, elementId) {
      const cmd = document.getElementById(elementId).textContent;
      navigator.clipboard.writeText(cmd).then(() => {
        createFirework(event.clientX, event.clientY);
      });
    }

    /**
     * 创建烟花动画效果
     * @param {number} x - 烟花中心 X 坐标
     * @param {number} y - 烟花中心 Y 坐标
     */
    function createFirework(x, y) {
      const container = document.createElement('div');
      container.className = 'firework';
      container.style.left = x + 'px';
      container.style.top = y + 'px';
      
      // 烟花颜色配置
      const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#95e1d3', '#f38181', '#aa96da', '#fcbad3', '#a8d8ea'];
      const particleCount = 20;
      
      // 创建粒子
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        
        // 计算粒子运动方向
        const angle = (i / particleCount) * Math.PI * 2;
        const velocity = 50 + Math.random() * 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(particle);
      }
      
      document.body.appendChild(container);
      
      // 动画结束后移除元素
      setTimeout(() => container.remove(), 800);
    }

    // ==================== 数据操作 ====================
    
    /**
     * 清空所有输入框和重置状态
     */
    function clearAll() {
      // 所有输入框 ID 列表
      const inputs = [
        'name', 'uuid', 'cfip', 'cfport', 
        'nezhaServer', 'nezhaPort', 'nezhaKey', 
        'argoPort', 'argoDomain', 'argoAuth', 
        'hy2Port', 'realityPort', 'tuicPort',
        'chatId', 'botToken', 'uploadUrl'
      ];
      
      // 清空所有输入框
      inputs.forEach(id => {
        document.getElementById(id).value = '';
      });
      
      // 重置 Argo 开关
      document.getElementById('disableArgo').checked = false;
      
      // 隐藏命令结果
      document.getElementById('result').style.display = 'none';
      document.getElementById('cmdOutput').textContent = '';
      
      updateFilledState();
    }

    /**
     * 从剪贴板粘贴哪吒监控命令并解析
     * 支持解析 NZ_SERVER、NZ_CLIENT_SECRET、NZ_UUID 字段
     */
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
  `;
}

// ============================================================================
// 第六部分：Cloudflare Worker 导出
// ============================================================================

/**
 * Cloudflare Worker 入口
 * 处理所有 HTTP 请求，返回配置页面
 */
export default {
  async fetch() {
    const html = generateHTML();
    
    return new Response(html, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' }
    });
  }
};

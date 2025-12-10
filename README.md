# eooce老王小钢炮可视化界面

核心脚本作者是`老王eooce`
Github地址：https://github.com/eooce
Youtube地址：https://www.youtube.com/@eooce
Telegram地址：https://t.me/eooceu

## 部署到 Cloudflare Workers

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages**
3. 点击 **Create Application** → **Create Worker**
4. 给 Worker 起个名字，点击 **Deploy**
5. 部署完成后点击 **Edit code**
6. 删除默认代码，将 `_worker.js` 的内容粘贴进去
7. 点击右上角 **Deploy** 保存

部署完成后访问分配的 `*.workers.dev` 域名即可使用。

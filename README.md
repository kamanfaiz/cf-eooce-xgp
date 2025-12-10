# eooce老王小钢炮可视化界面

小钢炮核心脚本作者是`老王eooce`，此项目只是将老王小钢炮做成了可视化界面，方便使用，有需求的可以自行修改。 <br>

Github地址：https://github.com/eooce <br>
Youtube地址：https://www.youtube.com/@eooce <br>
Telegram地址：https://t.me/eooceu

## 部署到 Cloudflare Workers

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages**
3. 点击 **Create Application** → **Create Worker**
4. 给 Worker 起个名字，点击 **Deploy**
5. 部署完成后点击 **Edit code**
6. 删除默认代码，将 `_worker.js` 的内容粘贴进去
7. 点击右上角 **Deploy** 保存

部署完成后访问分配的 `*.workers.dev` 域名即可使用，也可自行绑定自定义域名使用。


## 免责声明

本项目仅供学习交流使用，请勿用于非法用途。使用本项目所造成的一切后果由使用者自行承担，与项目作者无关。 <br>
本项目不包含任何数据存储功能，所有操作均在本地完成，代码完全开源可查，不存在窃取用户数据的风险。

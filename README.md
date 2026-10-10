# 个人网站与生日互动页面

纯静态网页，无构建步骤。

## 入口与结构

- `index.html`：作品集模板；仍含 Your Name、City、作品等占位内容，发布真实作品集前需要替换。
- `jm.html`：生日祝福页面，包含贪吃蛇游戏。
- `assets/css/portfolio.css`、`assets/js/portfolio.js`：作品集样式和交互。
- `assets/css/birthday-game.css`：生日页面样式。
- `assets/js/birthday-game.js`：游戏；脚本保留在原来的位置，确保先取得游戏节点。
- `assets/js/birthday-game-2.js`：生日屏幕切换，位于页面底部。
- `CNAME`：现有自定义域名配置。

## 本地预览

直接打开 HTML，或安装 Python 后在仓库目录运行 `python -m http.server 8000`，访问 `http://localhost:8000/` 和 `/jm.html`。

## 外部依赖与缺失资源

作品集使用 Google Fonts，离线时使用字体回退。生日页面引用 `1.gif`、`3.gif`、`c.gif`、`d.gif`，仓库目前没有这些图片，需要恢复原图或更新路径。联系区域没有已配置的消息接收后端，不能据此确认消息已发送。

## 检查清单

- 作品集导航、滚动动画、手机布局。
- 连续点击游戏开始按钮只启动一次倒计时；方向按钮、碰撞结束、重启、跳过分支。
- 图片补齐后检查生日页面所有屏幕。

整理分支尚未合并。合并前请确认 GitHub Pages 的发布设置；修改默认分支可能触发网站部署。

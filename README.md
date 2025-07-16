# llds-template

拉取模板（如 Vue、Express、Nest 等）。

## 📦 拉取

```bash
npx @llds/template
```

然后根据提示：

1. 选择你想要的模板（如：`uonvue-template`、`express-template` 等）
2. 输入你的项目名称（默认为 `my-app`）

工具会自动克隆模板并移除 `.git` 文件夹，初始化你的项目目录。

### 示例

```bash
? 请选择项目模板： ›
❯ uonvue-template
  express-template
  express-template-es
  nest-template
  product-ui-template

? 请输入项目名称： my-new-app

✅ 项目已创建 my-new-app
✅ 项目位置 /your/path/my-new-app

┌────────────────────────┐
│       下一步           │
│  cd my-new-app         │
│  pnpm i                │
└────────────────────────┘
```

## 🧩 模板

| 模板名称              | 仓库地址                                                   |
| --------------------- | ---------------------------------------------------------- |
| uonvue-template        | https://github.com/llds66/uonvue-template                 |
| hono-cf-template       | https://github.com/llds66/hono-cf-template                |
| express-template       | https://github.com/llds66/express-template                |
| express-template-es    | https://github.com/llds66/express-template-es             |
| nest-template          | https://github.com/llds66/nest-template                   |
| product-ui-template    | https://github.com/llds66/product-ui-template             |

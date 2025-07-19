#!/usr/bin/env node

import path from "path";
import { input, select } from "@inquirer/prompts";
import ora from "ora";
import simpleGit from "simple-git";
import boxen from "boxen";

const git = simpleGit();

const templateChoices = [
  {
    name: "uonvue-template",
    value: "git@github.com:llds66/uonvue-template.git",
  },
  {
    name: "hono-cf-template",
    value: "git@github.com:llds66/hono-cf-template.git",
  },
  // {
  //   name: "express-template",
  //   value: "git@github.com:llds66/express-template.git",
  // },
  // {
  //   name: "express-template-es",
  //   value: "git@github.com:llds66/express-template-es.git",
  // },
  // {
  //   name: "hono-template",
  //   value: "git@github.com:llds66/hono-template.git",
  // },
  // {
  //   name: "nest-template",
  //   value: "git@github.com:llds66/nest-template.git"
  // },
];

async function run() {
  const repoUrl = await select({
    message: " 请选择项目模板：",
    choices: templateChoices,
  });

  const projectName = await input({
    message: " 请输入项目名称：",
    default: "my-app",
  });
  if (!projectName) {
    console.error("项目名称不能为空");
    return;
  }
  const targetDir = path.resolve(process.cwd(), projectName);
  const spinner = ora("正在拉取...").start();

  try {
    await git.clone(repoUrl, targetDir, ["--depth", "1"]);

    spinner.succeed(" 模板克隆成功！");

    // 最终提示
    console.log(`\n✅ 项目已创建 ${projectName}`);
    console.log(`\n✅ 项目位置 ${targetDir}`);
    console.log(`\n`);
    console.log(
      boxen(`\n  cd ${projectName} \n  pnpm i`, {
        title: "下一步",
        titleAlignment: "center",
        width: 25,
        borderStyle: "round",
        borderColor: "green",
      })
    );
  } catch (error) {
    spinner.fail("克隆模板失败");
    console.error("❌ 错误：", error.message || error);
  }
}

run();
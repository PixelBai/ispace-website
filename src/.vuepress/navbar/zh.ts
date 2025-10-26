import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "首页", icon: "home", link: "/", activeMatch: "" },
  { text: "快速开始", icon: "guide", link: "/quickstart",activeMatch: "/quickstart" },
  { text: "文档", icon: "alias", link: "/docs/overview",activeMatch: "/docs/" },
  { text: "关于我", icon: "info", link: "/about", activeMatch: "/about" },
  { text: "在线预览", icon: "eye", link: "/ispace", activeMatch: "/ispace" },
  { text: "源码", icon: "gitee", link: "https://gitee.com/baialei/ispace" },
]);
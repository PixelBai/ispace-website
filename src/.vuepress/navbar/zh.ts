import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "快速开始", icon: "alias", link: "/quickstart",activeMatch: "/quickstart" },
  { text: "文档", icon: "alias", link: "/docs/overview",activeMatch: "/docs/" },
  { text: "关于我", icon: "alias", link: "/about/forme", activeMatch: "/about/" },
]);
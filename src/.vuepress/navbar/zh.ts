import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "首页", icon: "home", link: "/" },
  { text: "指南", icon: "activity", link: "/guide/guide",activeMatch: "/guide/" },
  { text: "更新日志", icon: "repo", link: "/release" },
  { text: "关于作者", icon: "alias", link: "/about" },
]);

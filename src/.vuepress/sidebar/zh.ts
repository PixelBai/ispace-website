import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({ 
  "/docs/": [
    {
      icon: "home",
      text: "概述",
      link: "overview",
    }, 
    {
      icon: "activity",
      text: "使用",
      link: "use",
    },
    {
      icon: "software",
      text: "开发",
      link: "develop", 
    },
    {
      icon: "activity",
      text: "部署",
      link: "deploy",
    },
  ],
  
});

import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/guide/": [ 
    {
      icon: "home",
      text: "前言",
      link: "/guide/guide",
    }, 
    {
      icon: "activity",
      text: "快速开始",
      prefix: "essential/",
      children: [
        // {
        //   icon: "bit",
        //   text: "安装环境",
        //   prefix: "base/",
        //   collapsible: true,
        //   children: "structure",
        // },
      ],
    },
    {
      icon: "software",
      text: "关于",
      prefix: "community/",
      // children: "structure",
      children: [],
    },
  ],
});

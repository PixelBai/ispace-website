import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "快速开始", icon: "alias", link: "/quickstart/ready",activeMatch: "/quickstart/" },
  { text: "文档", icon: "alias", link: "/docs/overview",activeMatch: "/docs/" },
  { text: "关于", icon: "alias", link: "/about", activeMatch: "/about/" ,children: [ 
    { text: "常见问题", icon: "alias", link: "/faq" },
    { text: "贡献", icon: "alias", link: "/contribute" },
    { text: "引用", icon: "alias", link: "/quote" },
    { text: "变更日志", icon: "alias", link: "/release" },
    { text: "github", icon: "alias", link: "/github" },
  ]},
]);

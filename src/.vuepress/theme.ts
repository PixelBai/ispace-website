import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar";
import { zhSidebar } from "./sidebar";

export default hopeTheme({
  hostname: "",

  author: {
    name: "PixelBai",
    url: "https://ispace.rcep.link/",
    email: "850568054@qq.com",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",

  sidebarSorter: ["filename", "order", "date", "readme"],
  // logo
  logo: "/logo.svg",
  // 仓库
  repo: "PixelBai/ispace-website",
  repoDisplay: false,
  // 版权
  copyright: "MIT Licensed | Copyright © 2025 PixelBai",
  // 仓库中的文件夹
  docsDir: "/src", 
  // 导航栏
  navbar: zhNavbar,
  // 侧边栏
  sidebar: zhSidebar,
  breadcrumb: false,

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  markdown: {
    align: true,
    figure: true,
    imgLazyload: true,
  },

  plugins: {
    readingTime: {
      wordPerMinute: 150,
    },

    slimsearch: {
      indexContent: true,
    }, 
  },
});

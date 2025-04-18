import {viteBundler} from "@vuepress/bundler-vite";
import {defineUserConfig} from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    base: "/",
    lang: "zh-CN",
    title: "ISpace",
    description: "我的专属空间",
 


    head: [
        [
            "script",
            {},
            `    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?548f817bec23cce94292d5ef840836dc";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`,
        ],
    ],

    bundler: viteBundler(),
    theme,

    shouldPrefetch: false,
    pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],
});

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
            `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?000";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`,
        ],
        [
            "script",
            {
                async: true,
                src: "https://www.googletagmanager.com/gtag/js?id=000"
            }
        ],
        [
            "script",
            {},
            `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-000');`
        ],
    ],

    bundler: viteBundler(),
    theme,

    shouldPrefetch: false,
    pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],
});

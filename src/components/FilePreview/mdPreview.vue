<template>
  <div class="md-preview">
    <div class="content">
      <div className="markdown-content" v-html="content" />
    </div>
    <div v-show="showAnchor" class="anchor">
      <el-affix position="top" :offset="100">
        <div ref="{anchor}" className="markdown-anchor" v-html="navData" />
      </el-affix>
    </div>
  </div>
</template>
<script>
import { onMounted, ref, computed } from "vue";
// markdown
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
// plugins
import MarkdownItAnchor from "markdown-it-anchor";
import slugify from "@sindresorhus/slugify";
import { parse } from "node-html-parser";
// import "highlight.js/styles/default.css"
import "highlight.js/styles/atom-one-dark.css";

export default {
  name: "HbMdPreview",
  props: {
    url: {
      type: String,
      default: "",
    },
    pageNum: {
      type: Number,
      default: 1,
    },
    showAnchor: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, context) {
    // markdow 文件内容
    const content = ref("");

    // ref
    const anchor = ref(null);
    // 导航数据
    // const navData = reactive([])
    const navData = computed(() => {
      const root = parse(content.value);
      const match = [];
      for (const h of root.querySelectorAll("h1, h2, h3, h4, h5, h6")) {
        const slug = h.getAttribute("id") || slugify(h.textContent);
        h.setAttribute("id", slug);
        // h.innerHTML = `<a href="#${slug}>${h.innerHTML}</a>`
        match.push(
          `<a href="#${slug}" class="${h.rawTagName}">${h.innerHTML}</a>`,
        );
      }
      return match.join("");
    });
    // 生命周期，挂载
    onMounted(() => {
      // 加载README.md
      const md = new MarkdownIt({
        html: true, // Enable HTML tags in source
        xhtmlOut: false, // Use '/' to close single tags (<br />).
        // This is only for full CommonMark compatibility.
        breaks: false, // Convert '\n' in paragraphs into <br>
        langPrefix: "language-", // CSS language prefix for fenced blocks. Can be
        // useful for external highlighters.
        linkify: false, // Autoconvert URL-like text to links

        // Enable some language-neutral replacement + quotes beautification
        // For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js
        typographer: false,
        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: "“”‘’",
        highlight: (str, lang) => {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return (
                '<pre class="hljs"><code>' +
                hljs.highlight(str, {
                  language: lang,
                  ignoreIllegals: true,
                }).value +
                "</code></pre>"
              );
            } catch (__) {}
          }

          return (
            '<pre class="hljs"><code>' +
            md.utils.escapeHtml(str) +
            "</code></pre>"
          );
        },
      });
      md.use(MarkdownItAnchor, {
        level: 1,
        slugify: (s) => {
          return slugify(s);
        },
        getTokensText(tokens) {
          return tokens
            .filter((t) => ["text", "code_inline"].includes(t.type))
            .map((t) => t.content)
            .join("");
        },
      });
      // llink
      md.linkify.set({ fuzzyEmail: false });
      content.value = md.render(props.url);
    });
    //
    const handleAnchor = (event) => {
      const { target } = event;
      // 拿到h标签上的id属性
      if (!target) {
        return;
      }
      const anchor = target.id;
      if (!anchor) {
        return;
      }
      // 手动导航
      document.querySelector("#" + anchor).scrollIntoView({
        behavior: "smooth",
      });
    };
    return {
      content,
      navData,
      handleAnchor,
      anchor,
    };
  },
};
</script>
<style lang="less" scoped>
.md-preview {
  width: 100%;
  height: 100%;
  display: flex;
  .content {
    width: calc(100% - 300px);
    flex: 1;
    padding: 0 20px;
  }
  .anchor {
    flex-basis: 300px;
    padding-left: 30px;
    box-sizing: border-box;
  }
}
</style>

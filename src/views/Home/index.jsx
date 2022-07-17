import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
// markdown
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
// import "highlight.js/styles/default.css"
import "highlight.js/styles/atom-one-dark.css"

// 将README.md导入进来
import ReadME from '/README.md?raw'

export default defineComponent({
    props: {

    },
    // 组件自定义触发事件，对象可定义验证函数
    emits: [],
    setup(porps, context) {
        // markdow 文件内容
        let content = ref('33')
        // 生命周期，挂载
        onMounted(() => {
            // 加载README.md
            const md = new MarkdownIt({
                html: false,        // Enable HTML tags in source
                xhtmlOut: false,        // Use '/' to close single tags (<br />).
                // This is only for full CommonMark compatibility.
                breaks: false,        // Convert '\n' in paragraphs into <br>
                langPrefix: 'language-',  // CSS language prefix for fenced blocks. Can be
                // useful for external highlighters.
                linkify: false,        // Autoconvert URL-like text to links

                // Enable some language-neutral replacement + quotes beautification
                // For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js
                typographer: false,
                // Double + single quotes replacement pairs, when typographer enabled,
                // and smartquotes on. Could be either a String or an Array.
                //
                // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
                // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
                quotes: '“”‘’',
                highlight: (str, lang) => {
                    if (lang && hljs.getLanguage(lang)) {
                        try {
                            return '<pre class="hljs"><code>' +
                                hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                                '</code></pre>';
                        } catch (__) { }
                    }

                    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
                }
            })
            // llink
            md.linkify.set({ fuzzyEmail: false });
            content.value = md.render(ReadME)

        })
        onUnmounted(() => {
            // 卸载，销毁组件

        })
        return {
            content
        }
    },
    render() {

        return <>
            <div v-html={this.content}></div>
        </>
    }
})

vite + vue3 

安装vite 从0 搭建vue3 开发环境。

### 安装 `vite`

支持 vue 模板文件，支持`jsx`语法文件

安装 `@vitejs/plugin-vue-jsx ` `@vitejs/plugin-vue`

```js
// 类型提示
import {defineConfig} from 'vite'
import vueJSX from '@vitejs/plugin-vue-jsx'
import vueSFC from '@vitejs/plugin-vue'

// config
export default defineConfig(({command,mode})=>{
    /**
     * command - 命令模式
     * mode - 生产、开发模式
     */

    return {
        // 项目根目录，index.html 所在的目录
        root:'',
        // 生产或开发环境下的基础路径
        base:'/',
        // 需要用到的插件数组
        plugins: [
            // .vue 单文件组件
            vueSFC(),
            // .jsx 文件类型支持
            vueJSX({
                // ... @vue/babel-plugin-jsx 的配置
            })
        ],
        // 静态资源服务目录地址
        publicDir:'',
        // 存储缓存文件的目录地址
        cacheDir:'',
        // 
        resolve:{
            // 设置文件目录别名
            alias:{
                "@":"/src"
            },
            //
            extensions:['.js',".jsx",'.vue']
        },
        //
        css:{
            // postcss-modules 行为配置
            modules:{
                // ...
            },
            // 传递给css预处理器的配置项
            preprocessorOptions:{
                // 指定less预处理的配置项
                less:{
                    // ...
                }
            }
        },
        // esbuild 选项转换配置
        esbuild:{
            // ...
            // 在react组件中无需导入react
            // jsxInject: `import React from 'react'`,
            // vue 使用jsx
            jsxFactory:'h',
            jsxFragment:'Fragment'
        },
        // 静态资源处理
        assetsInclude: '',
        // 开发服务器选项
        server:{
            // ...
            host:'127.0.0.1',
            port:'8081',
            // 项目启动后自动打开浏览器
            open:true
        },
        // 构建配置项
        build:{
            // ...
            // 指定输出目录
            outDir: './dist',
            // 指定静态资源存放目录
            assetsDir:"",
            // 启用、禁用css代码拆分
            cssCodeSplit:true,
            // 构建是否生成source map文件
            sourcemap:'inline',
            // rollup 配置打包项
            rollupOptions:{
                // ...
                // input:"src/index.js"
            },
            // 构建目录自动清除
            emptyOutDir:false
        },
        // 依赖优化配置项
        optimizeDeps:{
            // 依赖构建入口
            entries:'',
            // 排除不需要构建的依赖项
            exclude:[],
        }
    }
})
```

### 安装 `vue-router`


### 安装  `vuex` ， 改用了 `pinia`

```shell
npm install pinia

```

在每个模块中，按目录创建，不需要导入到全局store对象中。

在`setup` 或者JSX响应式模式中，使用 
```js
import { uesSystemStore } from '@/store/system.js'
import { computed } from 'vue'


// ... other

export default defineComponent({

    setup(props, context) {
        // 获取到pinia的数据
        const systemStore = uesSystemStore()

        // 计算值
        const name = computed(()=>systemStore.systemName)
        return {
            name,
            systemStore
        }
    },
})

```

在传统的`.vue`模板中

```js
import { useTabStore } from "../../model";

export default {
  data() {

    // 此处可创建store实例
    this.tabStore = useTabStore();
    return {
      // list data
      data: [],
    };
  },
  computed:{
    activeTab(){
      return this.tabStore.activeTab
    }
  },
}
```
### 安装 `element-plus`

全局配置

```js
// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { zhCn } from 'element-plus/es/locale/index.js'



// ....

// element 国际化设置
app.use(ElementPlus,{size:'small',zIndex:3000, local:zhCn})

```

### 安装 `axios`

### 安装 `dayjs`

### markdown 支持

安装`markdown-it` `highlight.js`

使用：  代码是写在`setup`中的

```js
// markdown
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'


// 将README.md导入进来
import ReadME from '/README.md?raw'


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
```

加载个样式，有很多可供挑选 在`import "highlight.js/styles/atom-one-dark.css"`

试了好几个，最后选择了这个，看着还不错。

![](/public/imgs/highlightjs.png)


### QA

1. `$router.push()` 后，在点击`/` 跳转路由不对

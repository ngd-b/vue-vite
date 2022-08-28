<template>
  <div class="docx-preview">
    <el-alert
      type="warning"
      effect="dark"
      show-icon
      title="只解析为html，没有任何样式，需要自己去设置样式。所以说如果就只是预览，可以让后端转为pdf后前端在展示预览。如果可以找到前端库，则会给示例实现。"
      :closable="false"
    />
      
    <div ref="docx" v-html="content" />
  </div>
</template>
<script>
import mammoth from 'mammoth/mammoth.browser'

export default {
  name: 'HbDocxPreview',
  props: {
    url: {
      type: String,
      default: '',
    },
    pageNum: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      content: '',
    }
  },
  watch: {
    url: {
      immediate: true,
      handler() {
        this.loadFile()
      },
    },
  },
  methods: {
    async loadFile() {
      this.$nextTick(() => {
        this.init()
      })
    },
    async init() {
      const self = this
      // 创建实例，加载文件
      console.log(this.url)
      // raadfile
      const blob = await this.$http.request({
        type: 'get',
        url: this.url,
        responseType: 'blob',
      })
      // blob 转 arrayBuffer
      const fileReader = new FileReader()

      fileReader.onload = function (res) {
        // 读取到ArrayBuffer
        console.log(fileReader, res)
        // 解析转换
        mammoth
          .convertToHtml({ arrayBuffer: fileReader.result })
          .then(function (result) {
            const html = result.value // The generated HTML
            // const messages = result.messages; // Any messages, such as warnings during conversion

            self.content = html
          })
          .done()
      }
      fileReader.readAsArrayBuffer(blob)
    },
  },
}
</script>

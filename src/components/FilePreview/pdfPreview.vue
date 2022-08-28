<template>
  <div class="pdf-preview">
    <div ref="pdf" />
  </div>
</template>
<script>
import pdfjs from '@bundled-es-modules/pdfjs-dist/build/pdf'
// import viewer from '@bundled-es-modules/pdfjs-dist/web/pdf_viewer';
import worker from '@bundled-es-modules/pdfjs-dist/build/pdf.worker.js?url'

pdfjs.GlobalWorkerOptions.workerSrc = worker

export default {
  name: 'HbPdfPreview',
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
      metaData: '',
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
    init() {
      const self = this
      // 创建实例，加载文件
      const loadingTask = pdfjs.getDocument(this.url)
      const container = this.$refs.pdf
      // 通过promise读取
      loadingTask.promise.then(function (doc) {
        const numPages = doc.numPages
        console.info('# Document Loaded')
        console.info('page num', numPages)

        // meta 数据信息
        doc.getMetadata().then(function (data) {
          console.log('# Metadata Is Loaded')
          self.metaData += `<p>${JSON.stringify(data.info, null, 2)}</p>`
          if (data.metadata) {
            self.metaData += `<p>${JSON.stringify(
              data.metadata.getAll(),
              null,
              2
            )}</p>`
          }
        })
        const loadPage = function (pageNum) {
          doc.getPage(pageNum).then(function (page) {
            const scale = 1.5
            const viewport = page.getViewport({ scale })
            // Support HiDPI-screens.
            const outputScale = window.devicePixelRatio || 1

            const canvas = document.createElement('canvas')
            const context = canvas.getContext('2d')
            container.appendChild(canvas)
            canvas.width = Math.floor(viewport.width * outputScale)
            canvas.height = Math.floor(viewport.height * outputScale)
            canvas.style.width = Math.floor(viewport.width) + 'px'
            canvas.style.height = Math.floor(viewport.height) + 'px'

            const transform =
                outputScale !== 1
                  ? [outputScale, 0, 0, outputScale, 0, 0]
                  : null

            const renderContext = {
              canvasContext: context,
              transform,
              viewport,
            }
            page.render(renderContext)
          })
        }
        // Loading of the first page will wait on metadata and subsequent loadings
        // will wait on the previous pages.
        const pageNum = Math.min(self.pageNum, numPages)
        for (let i = 1; i <= pageNum; i++) {
          // lastPromise = lastPromise.then(loadPage.bind(null, i));
          loadPage(i)
        }
      })
    },
  },
}
</script>

<template>
  <div class="file-editor">
    <h1>前端实现了</h1>
  </div>
</template>
<script>
  import Docxtemplater from 'docxtemplater'
  import PizZip from 'pizzip'
  import PizZipUtils from 'pizzip/utils/index.js'

  export default {
    data() {
      return {}
    },
    methods: {
      readFile() {
        this.loadFile('./file.docx', function (error, content) {
          if (error) {
            throw error
          }
          const zip = new PizZip(content)
          const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
          })
          const blob = doc.getZip().generate({
            type: 'blob',
            mimeType:
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          })
        })
      },
      loadFile(url, callback) {
        return PizZipUtils.getBinaryContent(url, callback)
      },
    },
  }
</script>

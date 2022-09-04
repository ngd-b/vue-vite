import { defineComponent, ref, computed } from 'vue'
import './index.less'
import { FileType } from '@/components/FilePreview/enum.js'
/**
 * 文件进行预览
 */
// pptx
// import pptFile from '@/assets/ppt/file.pptx?url'
// pdf
import pdfFile from '@/assets/pdf/file.pdf?url'
// docx
import docxFile from '@/assets/docx/file.docx?url'
// md
import ReadME from '../../../README.md?raw'

const FileTypeMapFile = {
  [FileType.pdf]: pdfFile,
  [FileType.docx]: docxFile,
  [FileType.md]: ReadME,
}
const FileTypeData = Object.keys(FileTypeMapFile)
export default defineComponent({
  setup(props, context) {
    // 当前活动的radio
    const activeTab = ref('pdf')
    // 文件的url
    const fileUrl = computed(() => FileTypeMapFile[activeTab.value])

    return {
      activeTab,
      fileUrl,
    }
  },
  render() {
    return (
      <div className="file-preview">
        {/* <el-radio-group v-model={this.activeTab}>
          {FileType.map((item) => (
            <el-radio-button label={item} />
          ))}
        </el-radio-group> */}
        <el-tabs v-model={this.activeTab}>
          {FileTypeData.map((item) => (
            <el-tab-pane name={item} label={item} />
          ))}
        </el-tabs>
        <main>
          <hb-file-preview
            type={this.activeTab}
            url={this.fileUrl}
            pageNum={10}
            showAnchor={false}
          />
        </main>
      </div>
    )
  },
})

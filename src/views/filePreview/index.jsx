import { defineComponent, ref } from 'vue'
import './index.less'
/**
 * 文件进行预览
 */
// pptx
// import pptFile from '@/assets/ppt/file.pptx?url'
// pdf
import pdfFile from '@/assets/pdf/file.pdf?url'

const FileType = ['pdf', 'docx', 'pptx', 'excel']
export default defineComponent({
  setup(props, context) {
    // 当前活动的radio
    const activeTab = ref('pdf')

    return {
      activeTab,
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
          {FileType.map((item) => (
            <el-tab-pane name={item} label={item} />
          ))}
        </el-tabs>
        <main>
          <hb-file-preview type={this.activeTab} url={pdfFile} />
        </main>
      </div>
    )
  },
})

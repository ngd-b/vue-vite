// table
import Table from './Table'
// file preview
import FilePreview from './FilePreview'

const Components = [Table,FilePreview]
// common components
export default {
  install(app, options) {
    // 注册全局组件
    // app.component()
    Components.map(component => app.component(component.name, component))
  }
}

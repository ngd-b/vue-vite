<template>
  <div class="file-preview">
    <keep-alive>
      <component :is="dynamicComponent" v-bind="$attrs" />
    </keep-alive>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { FileType } from "./enum";

// 组件
import PdfPreview from "./pdfPreview.vue";
import DocxPreview from "./docxPreview.vue";
import MdPreviewVue from "./mdPreview.vue";

// 组件类型映射
const FileTypeMapComponent = {
  [FileType.pdf]: PdfPreview,
  [FileType.docx]: DocxPreview,
  [FileType.md]: MdPreviewVue,
};
// props
const props = defineProps({
  type: {
    type: String,
    default: "",
  },
});
// 动态组件
const dynamicComponent = computed(() => FileTypeMapComponent[props.type]);
</script>
<script>
export default {
  name: "HbFilePreview",
  inheritAttrs: false,
};
</script>

<template>
    <div class="file-preview">
        <keep-alive>
            <component :is="dynamicComponent" v-bind="$attrs" />
        </keep-alive>
    </div>
</template>
<script setup>
import { computed} from 'vue'

// 组件
import PdfPreviewVue from './pdfPreview.vue';

// 组件类型映射
const TypeMapComponent = {
  pdf:PdfPreviewVue
}
// props
const props = defineProps({
  type:{
    type:String,
    default:''
  }
})
// 动态组件
const dynamicComponent = computed(()=>TypeMapComponent[props.type])
</script>
<script>
export default {
  name:'HbFilePreview',
}
</script>
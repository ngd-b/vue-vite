<template>
    <div class="element-plus">
            <hb-table :table-options="tableOptions" :page-options="pageOptions" />
        </div>
</template>
<script>
import {reactive, defineComponent,onMounted} from 'vue'

export default defineComponent({
    setup(){
        // table 属性
        const tableOptions = reactive({
            data:[],
            column:[]
        })
        // 分页属性
        const pageOptions = reactive({
            total:0,
            page:1,
            size:10
        })
        onMounted(()=>{
            // 挂载
            tableOptions.column = [
                {
                    prop:'name',
                    label:'姓名'
                },
                {
                    prop:'age',
                    label:'年龄'
                },
                {
                    prop:'birthday',
                    label:'出生年月'
                },
                {
                    prop:'address',
                    label:'地址'
                }
            ]
        })
        return{
            tableOptions,
            pageOptions
        }
    }
})
</script>
<style lang="less" scoped>

</style>
<template>
    <div class="element-plus">
            <hb-table :table-options="tableOptions" :page-options="pageOptions" />
        </div>
</template>
<script>
import {reactive, defineComponent,onMounted,h} from 'vue'

export default defineComponent({
    setup(){
        // table 属性
        const tableOptions = reactive({
            data:[],
            columns:[]
        })
        // 分页属性
        const pageOptions = reactive({
            total:0,
            page:1,
            size:10
        })
        onMounted(()=>{
            // 挂载
            tableOptions.columns = [
                {
                    prop:'name',
                    label:'姓名',
                    nested:true,
                    columns:[
                        {
                            prop:'first_name',
                            label:"姓",
                            render(row,column){
                                
                                // return <span style={{fontSize:'20px'}}>{row.first_name}</span>
                                return h('span',{
                                    style:{
                                        fontSize:'20px',
                                        color:"#ff00ff"
                                    }
                                },row.first_name)
                            }
                        },
                        {
                            prop:'last_name',
                            label:"名"
                        }
                    ]
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
            // 模拟数据
            tableOptions.data = new Array(10).fill(0).map(index=>({
                first_name:'王',
                last_name:'二',
                age:34,
                birthday:'1991-01-01',
                address:"北京故宫博物院"
            }))
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
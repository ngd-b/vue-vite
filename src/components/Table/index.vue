<template>
    <div class="hb-table">
        <header class="table-tools">
            <slot name="header"></slot>
        </header>
        <main class="table-list">
            <el-table :data="tableOptions.data" >
                <el-table-column v-for="item in tableOptions.column" :key="item.prop" :label="item.label" :prop="item.prop"></el-table-column>
            </el-table>
        </main>
        <footer v-if="showPagination" class="table-pagination" >
            <el-pagination
                background
                layout="total, sizes, prev, pager, next, jumper"
                :total="pageOptions.total"
                :current-page="pageOptions.page"
                :page-size="pageOptions.size"
                @size-change="handleChange($event,'size')"
                @current-change="handleChange($event,'page')"
            />
        </footer>
    </div>
</template>
<script>
export default {
    name:"HbTable",
    inheritAttrs:false,
    props:{
        tableOptions:{
            type:Object,
            default:()=>({
                data:[],
                column:[]
            })
        },
        pageOptions:{
            type:Object,
            default:()=>{}
        },
        showPagination:{
            type:Boolean,
            default:true,
        }
    },
    emits:['change'],
    data(){

        return {

        }
    },
    methods:{
        handleChange(val,attr){
            // 分页、页码
            this.$emit('change',{[attr]:val})
        }
    }
}
</script>
<style lang="less" scoped>
.hb-table{
    footer{
        margin-top: 15px;
        text-align: center;
        .el-pagination{
            justify-content: center;
        }
    }
}
</style>
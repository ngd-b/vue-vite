<template>
    <div>
        hello world

        <el-table :data="data" style="width: 100%" border>
            <el-table-column prop="create_at" label="创建时间" width="180" />
            <el-table-column prop="author.loginname" label="作者" width="180" />
            <el-table-column prop="content" label="内容" />
        </el-table>
    </div>
</template>
<script>
import { getTopicData } from '@/ajax/cnodeAPI.js'
    export default{
        data(){
            return {
                name:'CNode',
                // list data
                data:[]
            }
        },
        mounted(){
            this.getCNodeList()
        },
        methods:{
            async getCNodeList(){
                const {data,success} = await getTopicData({
                    page: 1,
                    tab: 'ask',
                    limit: 50,
                    mdrender: true
                })
                if(success){
                    this.data = data
                }
            }
        }
    }
</script>
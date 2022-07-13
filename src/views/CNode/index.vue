<template>
    <div class="cnode-page">
        <CNodeHeader />
        <main>

            <router-view></router-view>
        </main>
    </div>
</template>
<script>
//  组件
import { Header as CNodeHeader } from './components/index.js'

import "./index.less"
    export default{
        data(){
            return {
                name:'CNode',
            }
        },
        mounted(){
        },
        components:{
            CNodeHeader
        },
        methods:{
        }
    }
</script>
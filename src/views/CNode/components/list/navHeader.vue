<template>
    <div class="nav-header">
        <ul>
            <li @click="store.changeTab('')" :class="['nav-item',!activeTab?'active':'']">
                <span>全部</span>
            </li>
            <li @click="store.changeTab(item.value)" :class="['nav-item',activeTab===item.value?'active':'']" v-for="item in navTypes" :key="item.value">
                <span>{{item.label}}</span>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { TypeMapName } from '../enum'
import { computed,ref } from 'vue'
import { useTabStore } from '../../model'
// tab 项目
const navTypes = Object.keys(TypeMapName).map(key=>({
    value:key,
    label:TypeMapName[key]
}))
// store

const store = useTabStore()

let activeTab = computed(()=>store.activeTab)
// 
// const changeTab = computed(()=>store.changeTab)
</script>
<style lang="less" scoped>
.nav-header{
    background-color: #f6f6f6;
    padding:10px;
    border-radius: 3px 3px 0 0;
    height: 40px;
    ul{
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
    }
    .nav-item{
        color:#80bd01;
        margin:0 10px;
        padding: 4px 8px;
        border-radius: 3px;
        cursor: pointer;
        &.active{
            background-color: #80bd01;
            color:#fff;
            &:hover{
                color:#fff;
            }
        }
        &:hover{
            color:#005580;
        }
    }
}
</style>
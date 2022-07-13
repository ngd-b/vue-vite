<template>
  <div class="cnode-list">
    <nav-header />
    <ul>
      <li class="list-item" v-for="item in data" :key="item.id">
        <a class="author" :href="`/user/${item.author.loginname}`">
          <img :src="item.author.avatar_url" />
        </a>
        <span class="visit">
          {{item.reply_count+"/"+item.visit_count}}
        </span>
        <span class="content">
          {{item.title}}
        </span>
        <span class="last-reply">
          {{formatDate(item.last_reply_at)}}
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
import { getTopicData } from "@/ajax/cnodeAPI.js";
import { useTabStore } from "../../model";
import dayjs from 'dayjs'
import NavHeader from './navHeader.vue'

export default {
  data() {
    this.tabStore = useTabStore();
    return {
      // list data
      data: [],
    };
  },
  components:{
    NavHeader
  },
  // setup() {
  //   const tabStore = useTabStore();

  //   return {
  //     tabStore,
  //   };
  // },
  computed:{
    activeTab(){
      return this.tabStore.activeTab
    }
  },
  watch:{
    activeTab:{
      immediate:true,
      handler(){
        this.getCNodeList();
      }
    }
  },
  mounted() {
    // this.getCNodeList();
  },
  methods: {
    formatDate(val){
      return dayjs(val).format('YYYY-MM-DD')
    },
    async getCNodeList() {
      let params = {
        page: 1,
        tab: this.activeTab,
        limit: 50,
        mdrender: true,
      };
      try {
        const { data, success } = await getTopicData(params);
        if (success) {
          this.data = data;
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.cnode-list{
  background-color: #fff;
  ul{
    li{
      height: 52px;
      line-height: 52px;
      border-bottom: 1px solid #f0f0f0;
      display: flex;
      align-items: center;
      padding:0 5px;

      .author{
        display: inline-block;
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      .visit{
        width: 90px;
        text-align: left;
        display: inline-block;
        font-size: 10px;
        color:#b4b4b4;
      }
      .content{
        flex:1;
      }
      .last-reply{
        font-size: 13px;
        opacity:.6;
      }
    }
  }
}
</style>
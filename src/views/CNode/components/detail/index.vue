<template>
  <div class="topic-detail">
    <el-row :gutter="20">
      <el-col :span="18">
        <main>
          <header>
            <div class="topic-title">
              <tab-type :tab="data.tab" :isTop="data.top" :isGood="data.good" />
              <h3>{{ data.title }}</h3>
            </div>
            <div class="topic-desc">
              <span>{{ formatCreateDate(data.create_at) }}</span>
              <span>{{ data.author.loginname }}</span>
              <span>{{ data.visit_count }}浏览</span>
              <span>来自{{ TypeMapName[data.tab] }}</span>
            </div>
          </header>
          <div class="topic-content">
            <div v-html="data.content"></div>
            <div class="topic-reply"></div>
          </div>
          <div class="reply-info">
            <span>{{ data.replies.length }}回复</span>
            <ul>
              <li v-for="item in data.replies" :key="item.id">
                <reply-info :data="item" />
              </li>
            </ul>
          </div>
        </main>
      </el-col>
      <el-col :span="6">
        <div class="author-info"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getTopicDetail } from "@/ajax/cnodeAPI.js";
import { TypeMapName } from "../enum";
import dayjs from "dayjs";

// 回复组件
import ReplyInfo from "./reply-info.vue";
import TabType from "../tabType.vue";

export default {
  name: "topic-detail",
  data() {
    // 标签标识
    this.TypeMapName = TypeMapName;
    return {
      id: "",
      data: {
        author: {},
        replies: [],
      },
    };
  },
  components: {
    ReplyInfo,
    TabType,
  },
  mounted() {
    // 文章ID
    this.id = this.$route.query.id;
    // 获取详情
    this.getTopicDetail();
  },
  methods: {
    formatCreateDate(val) {
      let month = dayjs().diff(dayjs(val), "M");

      if (month > 1) {
        return month + "个月以前";
      }
      return dayjs(val).format("YYYY-MM-DD");
    },
    async getTopicDetail() {
      let params = {
        id: this.id,
        mdrender: true,
        accesstoken: "",
      };
      try {
        const { data, success } = await getTopicDetail(params);
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
.topic-detail {
  width: 100%;
  height: 100%;
  main,
  header {
    margin: 0;
    padding: 0;
    height: auto;
  }
  header {
    line-height: inherit;
    padding: 15px 10px;
    color: #333;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    font-size: 22px;
    .topic-title {
      display: flex;
      margin-bottom: 10px;
      align-items: center;
      h3 {
        margin-left: 10px;
      }
    }
    .topic-desc {
      color: #838383;
      font-size: 12px;
      span {
        position: relative;
        margin-left: 15px;
        &::before {
          content: "";
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #838383;
          left: -10px;
          top: 40%;
        }
      }
    }
  }
  main {
    overflow-x: hidden;
  }
  .topic-content {
    padding: 15px;
    line-height: 40px;
    background-color: #fff;
  }
  .reply-info {
    color: #444;
    margin-top: 20px;
    & > span {
      width: 100%;
      display: inline-block;
      height: 35px;
      background-color: #f6f6f6;
      line-height: 35px;
      padding-left: 10px;
    }
    & > ul {
      background-color: #fff;
    }
  }
}
</style>
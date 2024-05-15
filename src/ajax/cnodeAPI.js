import API from "@/ajax";

// 实例
const api = new API({
  timeout: 0,
  baseURL: "https://cnodejs.org/api/v1",
});

// 获取首页数据
export const getTopicData = (params) => {
  return api.request({
    url: "/topics",
    params,
  });
};

// 数据详情
export const getTopicDetail = (params) => {
  const id = params.id;

  return api.request({
    url: `/topic/${id}`,
    params,
  });
};

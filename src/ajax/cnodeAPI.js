import API from '@/ajax'

// 实例
const api = new API({
  baseURL: 'https://cnodejs.org/api/v1'
})

// 获取首页数据
export const getTopicData = (params) => {
  return api.request({
    type: 'get',
    url: '/topics',
    data: params
  })
}

// 数据详情
export const getTopicDetail = (params) => {
  const id = params.id

  return api.request({
    type: 'get',
    url: `/topic/${id}`,
    params
  })
}

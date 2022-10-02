import{
  cloudRequest
} from "../utils/request"

// 获取用户相亲信息 userInfo给用户微信信息用
export const getCurrentUserData = (params) => {
  params.method = "POST"
  return cloudRequest('/api/userInfo/getUserInfo', params)
}

// 修改用户信息
export const updateUserData = (params) => {
  params.method = "POST"
  return cloudRequest('/api/userInfo/update', params)
}

// 推荐数据
export const getRecommendData = (params) => {
  params.method = "POST"
  return cloudRequest('/api/recommend/getRecommend', params)
}

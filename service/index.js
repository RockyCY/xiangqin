import{
  cloudRequest
} from "../utils/request"

// 获取用户相亲信息 userInfo给用户微信信息用
export const getCurrentUserData = (params) => {
  params.method = "POST"
  return cloudRequest('/api/userInfo/getUserInfo', params)
}

// 修改用户信息 参数 id && 用户修改项
export const updateUserData = (params) => {
  params.method = "POST"
  return cloudRequest('/api/userInfo/update', params)
}

// 推荐数据 参数空对象
export const getRecommendData = (params) => {
  params.method = "POST"
  return cloudRequest('/api/recommend/getRecommend', params)
}

// 获取收藏列表 参数空对象
export const getFavoriteList = (params) => {
  params.method = "POST"
  return cloudRequest('/api/favorites/getFavorites', params)
}

// 收藏 参数id
export const addFavorites = (params) => {
  params.method = "POST"
  return cloudRequest('/api/favorites/addFavorites', params)
}
// 取消收藏 参数id
export const cancelFavorites = (params) => {
  params.method = "POST"
  return cloudRequest('/api/favorites/cancelFavorites', params)
}

//获取不喜欢原因 参数空对象
export const getNotLikeReason = (params) => {
  params.method = "POST"
  return cloudRequest('/api/notLike/getNotLikeReason',params)
}

//获取教育情况列表 参数空对象
export const getEducation = (params) => {
  params.method = "POST"
  return cloudRequest('/api/config/getEducation',params)
}

//获取婚姻情况列表 参数空对象
export const getMarriage = (params) => {
  params.method = "POST"
  return cloudRequest('/api/config/getMarriage',params)
}
//获取收入情况列表 参数空对象
export const getIncome = (params) => {
  params.method = "POST"
  return cloudRequest('/api/config/getIncome',params)
}
//获取关系情况列表 参数空对象
export const getRelation = (params) => {
  params.method = "POST"
  return cloudRequest('/api/config/getRelation',params)
}

//添加不喜欢理由 参数:fateUserInfoId: notLIkeReasons:[]
export const addNotLike = (params) => {
  params.method = "POST"
  return cloudRequest('/api/notLike/addNotLike',params)
}

//获取手机号 参数：fateUserInfoId
export const getPhoneNumber = (params) => {
  params.method = "POST"
  return cloudRequest('/api/phone/getPhoneNumber',params)
}

//举报 
/**
被举报卡片信息id
Number reportedInfoId;

/**
* 举报原因
*/
//String reason;

/**
* 举报描述
*/
//String content;

/**
* 举报图片地址
*/
//List<String> picUrl;
export const report = (params) => {
  params.method = "POST"
  return cloudRequest('/api/report/addReport',params)
}
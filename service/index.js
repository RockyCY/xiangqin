import{
  http
} from "../utils/request"

// 查询充值记录
export const getRecommendData = (params) => {
  params.method = "POST"
  return http('/api/count', params)
}
// index.js
// 获取应用实例
import{
  getRecommendData
} from "../../service/index"

const app = getApp()

Page({
  data: {
    currentIndex: 0,
    reasons:["年龄偏大","年龄偏小","收入偏高","收入偏低","学历偏大","学历偏小","身高偏大","身高偏小","居住地不匹配","对方信息不全"],
    buttonMargin:(wx.getSystemInfoSync().screenWidth - 300)/2,
    userInfo: {},
    hideDislikeMask:true,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false

  },
  
  onLoad() {
    getRecommendData({
      data: {
        
      }
    }).then(res => {
      if(res && res.code === 0 && res.data) {
        this.setData({
          hideDislikeMask: false
        })
      }else {
        this.setData({
          hideDislikeMask: true
        })
      }
    })
  },
  clickShare(){
    wx.showToast({
      title: 'clickShare',
    })
  },
  clickCollect(){
    wx.showToast({
      title: 'clickCollect',
    })
  },
  clickCall(){
    wx.showToast({
      title: 'clickCall',
    })
  },
  clickFill(){
    wx.navigateTo({
      url: '../personal/personal',
    })
  },
  showMask(){
    this.setData({
      hideDislikeMask:false
    })
  },
  closeMask(){
    this.setData({
      hideDislikeMask:true
    })
  },
  preventTouchMove(){
    return
  }
})

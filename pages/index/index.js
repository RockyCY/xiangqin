// index.js
// 获取应用实例
import{
  getRecommendData
} from "../../service/index"

const app = getApp()

Page({
  data: {
    currentIndex: 0,
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

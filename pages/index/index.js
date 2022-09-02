// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    currentIndex: 0,
    userInfo: {},
    // scrollHeight:,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数

  onLoad() {
    
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
  }
})

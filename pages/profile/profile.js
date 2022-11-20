// pages/profile/profile.js
import{
  getCurrentUserData,
  getShareInfo
} from "../../service/index"

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    navigationBarHeight:wx.getSystemInfoSync().statusBarHeight + 44,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    if(app.globalData.userInfoRes != null){
      this.setData({
        userInfo: app.globalData.currentUserData,
        hasUserInfo: true
      })
      return;
    }

    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        app.globalData.userInfoRes = res;
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if(!app.globalData.userInfoRes || app.globalData.shouldUpdateUserData == true)
    {
      app.globalData.shouldUpdateUserData = false;
      getCurrentUserData({
        data:{}
      }).then(
        (res) => {
          console.log(res.data.data.fateUserInfoResponse)
          app.globalData.currentUserData = res.data.data.fateUserInfoResponse;
          if(app.globalData.currentUserData.birth&&app.globalData.currentUserData.birth.length>0){
            app.globalData.currentUserData.birthYear = app.globalData.currentUserData.birth.substring(2,4) + '年';
          }
          if(app.globalData.currentUserData.address&&app.globalData.currentUserData.address.length>0){
            var addressArray = app.globalData.currentUserData.address.split('-');
            app.globalData.currentUserData.addressShort = addressArray[1];
          }
          if(app.globalData.currentUserData.hometown&&app.globalData.currentUserData.hometown.length>0){
            var hometownArray = app.globalData.currentUserData.hometown.split('-');
            app.globalData.currentUserData.hometownShort = hometownArray[1];
          }
          app.globalData.userPropDetail = res.data.data.userPropDetailDTO;
          app.globalData.currentUserData.redlineNum = res.data.data.userPropDetailDTO.invalidPropCount;
          this.setData({
            userInfo:app.globalData.currentUserData
          })
        }
      )
    }else {
      this.setData({
        userInfo:app.globalData.currentUserData
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    const promise = getShareInfo({
      data: {
        'fateUserInfoId': this.data.userInfo.id
      }
    }).then(
      (res) => {
        return {
          title: res.data.data.title
        }
      }
    )

    return {
      promise
    }
  },
  clickFill(){
    wx.navigateTo({
      url: '../personal/personal'
    })
  },
  clickGetMoreRedline(){
    wx.showToast({
      title: '获取更多',
    })
  }
})
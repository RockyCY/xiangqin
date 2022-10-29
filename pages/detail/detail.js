// pages/detail/detail.js

import {
  addFavorites,
  cancelFavorites,
  getNotLikeReason,
  addNotLike,
  getPhoneNumber,
  getShareInfo
} from "../../service/index"


Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData:{
    },
    reasons: [],
    selectedReasons: {},
    buttonMargin:(wx.getSystemInfoSync().screenWidth - 300)/2,
    userInfo: {},
    hideMask:true,
    isContactMask:false,
    isDislikeMask:false,
    hasUserInfo: false,
    scrollHeight:wx.getSystemInfoSync().screenHeight - wx.getSystemInfoSync().statusBarHeight - 44
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var userDataStr = options.userData;
    var userDataObject = JSON.parse(userDataStr);
    this.setData({
      userData:userDataObject
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
    this.setData({
      hideMask:false,
      isDislikeMask:false,
      isContactMask:true
    })
  },
  clickFill(){
    wx.navigateTo({
      url: '../personal/personal',
    })
  },
  clickSubmit(){
    wx.showToast({
      title: 'clickSubmit',
    })
  },
  showMask(e){
    this.setData({
      hideMask:false,
      isDislikeMask:true,
      isContactMask:false
    })
  },
  closeMask(e){
    this.setData({
      hideMask:true
    })
  },
  clickReasonButton(e){
    let num = e.detail;
    var reason = this.data.reasons[num];
    console.log(reason);
    var selectedStatus = this.data.selectedReasons[reason];
    if(selectedStatus == false){
      this.data.selectedReasons[reason] = true;
    }else {
      this.data.selectedReasons[reason] = false;
    }
    this.setData({
      selectedReasons:this.data.selectedReasons
    })
  },
  preventTouchMove(){
    return
  },
  clickCopyNumber(){
    wx.setClipboardData({
      data: this.data.userData.phoneNumber,
      success: function (res) {
        wx.showToast({
           title: '复制成功',
           icon: 'none',
           mask: 'true'
        })
     }
    })
  },
  callPhone(){
    wx.makePhoneCall({
      phoneNumber: this.data.userData.phoneNumber,
    })
  },
  platformHelp(){

  }
})
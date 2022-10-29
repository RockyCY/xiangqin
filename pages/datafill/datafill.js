// pages/datafill/datafill.js
import {
  getCurrentUserData,
  updateUserData
} from "../../service/index"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userBasicInfo:{
      sex:-1, //-1 未选择 0 女 1 男
      birth:'选择出生日期',
      address:'',
      maritalStatus:-1 // 0 未婚 1 离异 2 丧偶
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getCurrentUserData({
      data:{}
    }).then(
      (res) => {
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
          userInfo:res.app.globalData.currentUserData
        })
      }
    )
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

  clickFillOver(){

    wx.navigateBack({
      delta: 0,
    })
  },
  clickSex(e){
     let currentGender = e.currentTarget.dataset.sex;
     if(currentGender == this.data.userBasicInfo.sex){
      this.data.userBasicInfo.sex = -1;
     }else {
      this.data.userBasicInfo.sex = currentGender;
     }
     this.setData({
      userBasicInfo: this.data.userBasicInfo
    })
  },

  bindBirthChange: function (e) {
    this.data.userBasicInfo.birth = e.detail.value;
    this.setData({
      userBasicInfo: this.data.userBasicInfo
    })
  },
  bindAddressChange: function (e) {
    this.data.userBasicInfo.addres = e.detail.value;
    this.setData({
      userBasicInfo: this.data.userBasicInfo
    })
  },
  clickMaritalStatus:function (e) {
    let num = e.detail;
    if(this.data.userBasicInfo.maritalStatus == num){
      this.data.userBasicInfo.maritalStatus = -1;
    }else {
      this.data.userBasicInfo.maritalStatus = e.detail;
    }
  
    this.setData({
      userBasicInfo: this.data.userBasicInfo
    })
  }
})
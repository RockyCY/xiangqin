// pages/datafill/datafill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userBasicInfo:{
      gender:-1, //-1 未选择 0 女 1 男
      birthday:'选择出生日期',
      resident:[],
      status:-1 // 0 未婚 2 离异 4 丧偶
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
  clickGender(e){
     let currentGender = e.currentTarget.dataset.gender;
     if(currentGender == this.data.userBasicInfo.gender){
      this.data.userBasicInfo.gender = -1;
     }else {
      this.data.userBasicInfo.gender = currentGender;
     }
     this.setData({
      userBasicInfo: this.data.userBasicInfo
    })
  },

  bindDateChange: function (e) {
    this.data.userBasicInfo.birthday = e.detail.value;
    this.setData({
      userBasicInfo: this.data.userBasicInfo
    })
  },
  bindRegionChange: function (e) {
    this.data.userBasicInfo.resident = e.detail.value;
    this.setData({
      userBasicInfo: this.data.userBasicInfo
    })
  },
  clickStatus:function (e) {
    let num = e.detail;
    if(this.data.userBasicInfo.status == num){
      this.data.userBasicInfo.status = -1;
    }else {
      this.data.userBasicInfo.status = e.detail;
    }
  
    this.setData({
      userBasicInfo: this.data.userBasicInfo
    })
  }
})
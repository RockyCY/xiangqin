// pages/report/report.js

import{
  report
} from "../../service/index"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData:{},
    reasons:['假信息','骚扰我','发广告','其他'],
    selectedReasons:{'假信息':false,'骚扰我':false,'发广告':false,'其他':false},
    leftReportMargin:(wx.getSystemInfoSync().screenWidth - 316)/2,
    picUrl:[],
    reason:'',
    content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var userDataStr = options.userData;
    var userDataObject = JSON.parse(userDataStr);
    this.setData({
      userData: userDataObject
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
  clickReasonButton(e){
    let num = e.detail;
    var reason = this.data.reasons[num];
    var selectedStatus = this.data.selectedReasons[reason];
    if(selectedStatus == false){
      for(var reasonItem of this.data.reasons){
        this.data.selectedReasons[reasonItem] = false;
      }
      this.data.selectedReasons[reason] = true;
    }else {
      this.data.selectedReasons[reason] = false;
    }
    this.setData({
      reason:reason,
      selectedReasons:this.data.selectedReasons
    })
  },
  clickReport(){

    report({
      data:{
        'reportedInfoId':this.data.userData.id,
        'reason':this.data.reason,
        'content':this.data.content,
        'picUrl':this.data.picUrl
      }
    }).then(
      (res) => {
        console.log('举报成功')
        wx.navigateBack({
          delta: 0,
        })
      }
    )
  },
  bindKeyInput: function (e) {
    let value = e.detail.value;
    this.setData({
      content:value
    })
  },
  addPic: function (e) {
    wx.chooseMedia({
      count: 3,
      mediaType: ['image'],
      sourceType: ['album'],
      maxDuration: 30,
      camera: 'back',
      success(res) {
        console.log(res.tempFiles.tempFilePath)
        console.log(res.tempFiles.size)
        wx.cloud.uploadFile({
          cloudPath: '7072-prod-9ggc7xkmfcc18237-1313078534/report/'+this.data.userData.id+'.png', // 对象存储路径，根路径直接填文件名，文件夹例子 test/文件名，不要 / 开头
          filePath: res.tempFiles.tempFilePath, // 微信本地文件，通过选择图片，聊天文件等接口获取
          config: {
            env: 'prod-9ggc7xkmfcc18237' // 需要替换成自己的微信云托管环境ID
          }
        }).then(res => {
          console.log('uploadSuccessed')
          console.log(res.fileID)
        }).catch(error => {
          console.log('uploadFailed')
          console.error(err)
        })
      }
    })
  },
})
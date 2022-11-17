// pages/collection/collection.js

import{
  getFavoriteList
} from "../../service/index"

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstLoad:true,
    scrollHeight:wx.getSystemInfoSync().screenHeight - wx.getSystemInfoSync().statusBarHeight,
    collectionList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      firstLoad:false
    })
    getFavoriteList({
      data:{

      }
    }).then(
      (res) => { 
        for(var item of res.data.data){
          if(item.birth&&item.birth.length>0){
            item.birthYear = item.birth.substring(2,4) + '年';
          }
          if(item.address&&item.address.length>0){
            var addressArray = item.address.split('-');
            item.addressShort = addressArray[1];
          }
          if(item.hometown&&item.hometown.length>0){
            var hometownArray = item.hometown.split('-');
            item.hometownShort = hometownArray[1];
          }
        }
        console.log('favoriteList')
        console.log(res.data.data)
        this.setData({
          collectionList:res.data.data,
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
    if(app.globalData.shouldUpdateColletion && !this.data.firstLoad){
      console.log('updateCollection');
      app.globalData.shouldUpdateColletion = false;
      getFavoriteList({
        data:{
  
        }
      }).then(
        (res) => { 
          for(var item of res.data.data){
            if(item.birth&&item.birth.length>0){
              item.birthYear = item.birth.substring(2,4) + '年';
            }
            if(item.address&&item.address.length>0){
              var addressArray = item.address.split('-');
              item.addressShort = addressArray[1];
            }
            if(item.hometown&&item.hometown.length>0){
              var hometownArray = item.hometown.split('-');
              item.hometownShort = hometownArray[1];
            }
          }
          console.log('favoriteList')
          console.log(res.data.data)
          this.setData({
            collectionList:res.data.data
          })
        }
      )
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

  },
  clickData(e){
    let userData = e.detail;
    var userDataStr = JSON.stringify(userData);
    wx.navigateTo({
      url: '../detail/detail?userData='+userDataStr,
    })
  },
  clickShare(){
    wx.showToast({
      title: 'clickShare',
    })
  }

})
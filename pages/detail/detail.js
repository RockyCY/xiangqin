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
    recommendDataArray: [],
    currentCollectUserData: {},//当前推荐的用户信息
    reasons: [],
    selectedReasons: {},
    buttonMargin:(wx.getSystemInfoSync().screenWidth - 300)/2,
    userInfo: {},
    hideMask: true,
    hideActionSheet: true,
    isContactMask: false,
    isDislikeMask: false,
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
      currentCollectUserData:userDataObject
    })

    getNotLikeReason({
      data: {

      }
    }).then(
      (res) => {
        var reasonsDict = {};
        for (var reasonItem of res.data.data) {
          reasonsDict[reasonItem.name] = false;
        }
        this.setData({
          reasons: res.data.data,
          selectedReasons: reasonsDict
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

  clickCollect(e) {
    let user = e.detail;
    console.log(user);
    if (user.favorite == false) {
      addFavorites({
        data: {
          'fateUserInfoId': user.id
        }
      }).then(
        (res) => {
          var toast = '收藏成功';
          if (res && res.data.code == 0) {
            app.globalData.shouldUpdateColletion = true;
            for (var item of this.data.recommendDataArray) {
              if (item.id == user.id) {
                item.favorite = true;
                break;
              }
            }
          } else {
            toast = '收藏失败';
          }
          this.setData({
            recommendDataArray: this.data.recommendDataArray
          })
          wx.showToast({
            title: toast,
            icon: 'none'
          })
        }
      )
    } else {
      cancelFavorites({
        data: {
          'fateUserInfoId': user.id
        }
      }).then(
        (res) => {
          var toast = '取消收藏成功';
          if (res && res.data.code == 0) {
            for (var item of this.data.recommendDataArray) {
              if (item.id == user.id) {
                item.favorite = false;
                break;
              }
            }
          } else {
            toast = '取消收藏失败';
          }
          this.setData({
            recommendDataArray: this.data.recommendDataArray
          })
          wx.showToast({
            title: toast,
            icon: 'none'
          })
        }
      )
    }

  },
  clickCall(e) {
    let detail = e.detail;
    console.log(detail);
    this.setData({
      currentCollectUserData: detail
    })
    getPhoneNumber({
      data: {
        'fateUserInfoId': detail.id,
      }
    }).then(
      (res) => {
        this.setData({
          hideMask: false,
          hideActionSheet: true,
          isDislikeMask: false,
          isContactMask: true
        })
      }
    )
  },
  clickFill() {
    wx.navigateTo({
      url: '../personal/personal',
    })
  },
  clickMore(e) {
    this.setData({
      currentCollectUserData: e.detail
    })
    this.setData({
      hideMask: true,
      hideActionSheet: false,
      isDislikeMask: false,
      isContactMask: false
    })
  },

  clickSubmit(e) {
   var notLikeReasonsArray = [];
   for(var item of this.data.reasons){
        if(this.data.selectedReasons[item.name] == true){
          notLikeReasonsArray.push(item.code);
        }
   }
    addNotLike({
      data: {
        'fateUserInfoId': this.data.currentCollectUserData.id,
        'notLIkeReasons': notLikeReasonsArray
      }
    }).then(
      (res) => {
        this.setData({
          hideMask: true,
          hideActionSheet: true,
          isDislikeMask: false,
          isContactMask: false
        })
        wx.showToast({
          title: '提交成功',
          icon: 'none'
        })
      }
    )
  },
  showMask(e) {
    console.log('showMask');
    console.log(e.detail);
    this.setData({
      currentCollectUserData: e.detail
    })
    this.setData({
      hideMask: false,
      hideActionSheet: true,
      isDislikeMask: true,
      isContactMask: false
    })
  },
  closeMask(e) {
    this.setData({
      hideMask: true,
      hideActionSheet: true
    })
  },
  clickReasonButton(e) {
    let num = e.detail;
    var reason = this.data.reasons[num];
    var selectedStatus = this.data.selectedReasons[reason.name];
    if (selectedStatus == false) {
      this.data.selectedReasons[reason.name] = true;
    } else {
      this.data.selectedReasons[reason.name] = false;
    }
    this.setData({
      selectedReasons: this.data.selectedReasons
    })
  },
  preventTouchMove() {
    return
  },
  clickCopyNumber() {
    wx.setClipboardData({
      data: this.data.currentCollectUserData.phoneNumber,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
          icon: 'none',
          mask: 'true'
        })
      }
    })
  },

  report() {
    wx.navigateTo({
      url: '../report/report',
    })
  },
  callPhone() {
    wx.makePhoneCall({
      phoneNumber: this.data.currentCollectUserData.phoneNumber,
    })
  }
})
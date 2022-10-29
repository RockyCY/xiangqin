// index.js
// 获取应用实例
import {
  getRecommendData,
  addFavorites,
  cancelFavorites,
  getNotLikeReason,
  addNotLike,
  getPhoneNumber,
  getShareInfo,
  getCurrentUserData
} from "../../service/index"

const app = getApp()

Page({
  data: {
    recommendDataArray: [],
    currentUserData: {},
    reasons: [],
    selectedReasons: {},
    buttonMargin: (wx.getSystemInfoSync().screenWidth - 300) / 2,
    userInfo: {},
    hideMask: true,
    hideActionSheet: true,
    isContactMask: false,
    isDislikeMask: false,
    hasUserInfo: false,
    scrollHeight: wx.getSystemInfoSync().screenHeight - wx.getSystemInfoSync().statusBarHeight - 44,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },

  onLoad() {
    //test
    if (!app.globalData.userInfoRes) {
      getCurrentUserData({
        data: {}
      }).then(
        (res) => {
          app.globalData.currentUserData = res.data.data.fateUserInfoResponse;
          if (app.globalData.currentUserData && app.globalData.currentUserData.birth.length > 0) {
            app.globalData.currentUserData.birthYear = app.globalData.currentUserData.birth.substring(2, 4) + '年';
          }
          if (app.globalData.currentUserData && app.globalData.currentUserData.address.length > 0) {
            var addressArray = app.globalData.currentUserData.address.split('-');
            app.globalData.currentUserData.addressShort = addressArray[1];
          }
          if (app.globalData.currentUserData && app.globalData.currentUserData.hometown.length > 0) {
            var hometownArray = app.globalData.currentUserData.hometown.split('-');
            app.globalData.currentUserData.hometownShort = hometownArray[1];
          }
          app.globalData.userPropDetail = res.data.data.userPropDetailDTO;
        }
      )
    }

    getRecommendData({
      data: {

      }
    }).then(
      (res) => {
        for (var item of res.data.data) {
          if (item.birth && item.birth.length > 0) {
            item.birthYear = item.birth.substring(2, 4) + '年';
          }
          if (item.address && item.address.length > 0) {
            var addressArray = item.address.split('-');
            item.addressShort = addressArray[1];
          }
          if (item.hometown && item.hometown.length > 0) {
            var hometownArray = item.hometown.split('-');
            item.hometownShort = hometownArray[1];
          }
        }
        this.setData({
          recommendDataArray: res.data.data
        })
      }
    )

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

  onShow() {

  },
  onShareAppMessage: function (res) {
    const promise = getShareInfo({
      data: {
        'fateUserInfoId': this.data.currentUserData.id
      }
    }).then(
      (res) => {
        return {
          title: res.data.data.title
        }
        // console.log('res.data')
        // console.log(res.data.data.title)
        // shareInfo = res;
      }
    )

    return {
      promise
    }
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
    getPhoneNumber({
      data: {
        'fateUserInfoId': detail.id,
      }
    }).then(
      (res) => {
        console.log('getPhoneNumber')
        console.log(res)
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
      currentUserData: e.detail
    })
    this.setData({
      hideMask: true,
      hideActionSheet: false,
      isDislikeMask: false,
      isContactMask: false
    })
  },

  clickSubmit(e) {
    addNotLike({
      data: {
        'fateUserInfoId': this.data.currentUserData.id,
        'notLIkeReasons': []
      }
    }).then(
      (res) => {
        console.log('addNotLike')
        console.log(res.data)
      }
    )
  },
  showMask(e) {
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
      data: this.data.userData.phone,
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
      phoneNumber: this.data.userData.phone,
    })
  }
})
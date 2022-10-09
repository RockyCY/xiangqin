// pages/profile/profile.js
import{
  getCurrentUserData
} from "../../service/index"

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    userData:{
      id:123456,
      photo:'',
      sex:'男',
      birth:'1991-01-01',
      height:'170cm',
      weight:'55kg',
      address:['广东省', '广州市', '海珠区'],
      hometown:['广东省', '广州市', '海珠区'],
      maritalStatus:'未婚',
      education:'本科',
      school:'清华大学',
      income:'10-15W',
      relation:'母子',
      phoneNumber:'138*****1234',
      marriagePlan:'',
      car:'',
      house:'',
      personalInformation:'独生女，92年11月生，未婚,身高165，名校毕业，深圳福田国企会计，家住福田，女儿在深圳长大，父在央企做管理工作，母是医生已退休，全家深户，身体健康，无经济压力。',
      mateSelectionCriteria:'要求男孩未婚，88年后生，身高170以上，身体健康，本科以上学历，工作稳定，积极上进，有责任心，感情专一的优秀男孩。'
   },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    navigationBarHeight:wx.getSystemInfoSync().statusBarHeight + 44,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getCurrentUserData({
      data:{}
    }).then(
      (res) => {
        app.globalData.userData = res.data.data.fateUserInfo;
        app.globalData.userPropDetail = res.data.data.userPropDetailDTO;
        console.log('getCurrentUserData');
        console.log(res);
      }
    )
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    if(app.globalData.userInfoRes.userInfo != null){
      console.log(app.globalData.userInfoRes.userInfo);
      this.setData({
        userInfo: app.globalData.userInfoRes.userInfo,
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
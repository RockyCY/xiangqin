// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData:{
      gender:'男',
      birthday:'1991-01-01',
      heigh:'170cm',
      weigh:'55kg',
      revenue:'10-15W',
      residentPlace:['广东省', '广州市', '海珠区'],
      hometown:['广东省', '广州市', '海珠区'],
      marriage:'未婚',
      education:'本科',
      revenue:'10-15W',
      relation:'母子',
      phone:'138*****1234',
      personalDesc:'独生女，92年11月生，未婚,身高165，名校毕业，深圳福田国企会计，家住福田，女儿在深圳长大，父在央企做管理工作，母是医生已退休，全家深户，身体健康，无经济压力。',
      spouceDesc:'要求男孩未婚，88年后生，身高170以上，身体健康，本科以上学历，工作稳定，积极上进，有责任心，感情专一的优秀男孩。',
      personalLabel:['1-2年内结婚','已购房','已购车','40-50w/年','北京联合大学']
   },
    redlineNum:99,
    reasons:["年龄偏大","年龄偏小","收入偏高","收入偏低","学历偏大","学历偏小","身高偏大","身高偏小","居住地不匹配","对方信息不全"],
    selectedReasons:{"年龄偏大":false,"年龄偏小":false,"收入偏高":false,"收入偏低":false,"学历偏大":false,"学历偏小":false,"身高偏大":false,"身高偏小":false,"居住地不匹配":false,"对方信息不全":false},
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
  callPhone(){
    wx.makePhoneCall({
      phoneNumber: this.data.userData.phone,
    })
  },
  platformHelp(){

  }
})
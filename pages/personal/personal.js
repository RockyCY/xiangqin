// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 2,
    userData:{
       gender:'男',
       birthday:'1991-01-01',
       heigh:'170cm',
       revenue:'10-15W',
       residentPlace:'广东省-广州市-海珠区',
       hometown:'广东省-广州市-海珠区',
       marriage:'未婚',
       education:'本科',
       revenue:'10-15W',
       relation:'母子',
       phone:'138*****1234',
       personalDesc:'独生女，92年11月生，未婚,身高165，名校毕业，深圳福田国企会计，家住福田，女儿在深圳长大，父在央企做管理工作，母是医生已退休，全家深户，身体健康，无经济压力。',
       spouceDesc:'要求男孩未婚，88年后生，身高170以上，身体健康，本科以上学历，工作稳定，积极上进，有责任心，感情专一的优秀男孩。'
    },
    hideMask:true,
    descTitleWidth:wx.getSystemInfoSync().screenWidth - 18.5 * 2,
    genderList:['男','女'],
    bodyHeighList:['160cm以下','161cm','162cm','163cm','164cm','165cm','166cm','167cm','168cm','169cm','170cm','171cm','172cm','173cm','174cm','175cm','176cm','177cm','178cm','179cm','180cm','181cm','182cm','183cm','184cm','185cm','186cm','187cm','188cm','189cm','190cm','190cm以上'],
    marriageList:['未婚','离异','丧偶'],
    educationList:['本科以下','本科','研究生','博士'],
    revenueList:['10W以下','10-15W','15-30W','30-50W','50-80W','80W以上'],
    relationList:['父子','父女','母子','母女','亲戚','朋友','其他'],
    date: '1991-01-01',
    region: ['广东省', '广州市', '海珠区']
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

  bindGenderChange: function (e) {
    let num = e.detail.value;
    this.data.userData.gender = this.data.genderList[num];
    this.setData({
      userData: this.data.userData
    })
  },
  bindDateChange: function (e) {
    this.data.userData.birthday = e.detail.value;
    this.setData({
      userData: this.data.userData
    })
  },
  bindHeighChange: function (e) {
    let num = e.detail.value;
    this.data.userData.heigh = this.data.bodyHeighList[num];
    this.setData({
      userData: this.data.userData
    })
  },
  clickBar(e){
    let title = e.detail;
    console.log(title);
    this.setData({
      hideMask:false
    })
  },
  closeMask(){
    this.setData({
      hideMask:true
    })
  },
  preventTouchMove(){
    return
  }
})
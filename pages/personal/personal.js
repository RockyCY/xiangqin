// pages/personal/personal.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight:wx.getSystemInfoSync().screenHeight - wx.getSystemInfoSync().statusBarHeight - 44,
    userData:{
      id:123456,
      gender:'男',
      birthday:'1995-01-01',
      heigh:'170cm',
      weigh:'70kg',
      residentPlace:['', '', ''],
      hometown:['', '', ''],
      marriage:'未婚',
      education:'本科',
      school:'清华大学',
      revenue:'10-20W',
      relation:'父子',
      phone:'138*****1234',
      marriagePlan:'',
      car:'',
      house:'',
      personalDesc:'独生女，92年11月生，未婚,身高165，名校毕业，深圳福田国企会计，家住福田，女儿在深圳长大，父在央企做管理工作，母是医生已退休，全家深户，身体健康，无经济压力。',
      spouceDesc:'要求男孩未婚，88年后生，身高170以上，身体健康，本科以上学历，工作稳定，积极上进，有责任心，感情专一的优秀男孩。',
      personalLabel:['1-2年内结婚','已购房','已购车','40-50w/年','北京联合大学'],
      redlineNum:99
   },
    hideMask:true,
    isPhoneMask:false,
    isVertifiCodeMask:false,
    isSchoolMask:false,
    isPersonalDescMask:false,
    isSpouseDescMask:false,
    inputPhone:'',
    verifiCode:'',
    inputSchool:'',
    inputPersonalDesc:'',
    inputSpouseDesc:'',
    descTitleWidth:wx.getSystemInfoSync().screenWidth - 18.5 * 2,
    genderList:['男','女'],
    bodyHeighList:['140cm','141cm','142cm','143cm','144cm','145cm','146cm','147cm','148cm','149cm','150cm','151cm','152cm','153cm','154cm','155cm','156cm','157cm','158cm','159cm','160cm','161cm','162cm','163cm','164cm','165cm','166cm','167cm','168cm','169cm','170cm','171cm','172cm','173cm','174cm','175cm','176cm','177cm','178cm','179cm','180cm','181cm','182cm','183cm','184cm','185cm','186cm','187cm','188cm','189cm','190cm','191cm','192cm','193cm','194cm','195cm','196cm','197cm','198cm','199cm','200cm'],
    bodyWeighList:['40kg','41kg','42kg','43kg','44kg','45kg','46kg','47kg','48kg','49kg','50kg','51kg','52kg','53kg','54kg','55kg','56kg','57kg','58kg','59kg','60kg','61kg','62kg','63kg','64kg','65kg','66kg','67kg','68kg','69kg','70kg','71kg','72kg','73kg','74kg','75kg','76kg','77kg','78kg','79kg','80kg','81kg','82kg','83kg','84kg','85kg','86kg','87kg','88kg','89kg','90kg','91kg','92kg','93kg','94kg','95kg','96kg','97kg','98kg','99kg','100kg'],
    marriageList:['未婚','离异','丧偶'],
    educationList:['初中','高中','中专','大专','本科','研究生','博士'],
    revenueList:['0-10W','10-20W','20-30W','30-40W','40-50W','50-80W','80-120W','120W以上'],
    relationListMan:['父子','母子','本人'],
    relationListWoman:['父女','母女','本人'],
    housePlan:['已购房','计划购房','未购房'],
    carPlan:['已购车','计划购车','未购车'],
    marriagePlan:['半年内结婚','1-2年结婚','不着急结婚'
    ],
    date: '1995-01-01',
    region: ['', '', '']
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
    if(this.data.userData.gender != this.data.genderList[num]){
      if(this.data.genderList[num] == '男'){
        this.data.userData.relation='父子';
      }else {
        this.data.userData.relation='父女';
      }
    }
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
  bindWeighChange: function (e) {
    let num = e.detail.value;
    this.data.userData.weigh = this.data.bodyWeighList[num];
    this.setData({
      userData: this.data.userData
    })
  },
  bindRegion1Change: function (e) {
    this.data.userData.residentPlace = e.detail.value;
    this.setData({
      userData: this.data.userData
    })
  },
  bindRegion2Change: function (e) {
    this.data.userData.hometown = e.detail.value;
    this.setData({
      userData: this.data.userData
    })
  },
  bindMarriageChange: function (e) {
    let num = e.detail.value;
    this.data.userData.marriage = this.data.marriageList[num];
    this.setData({
      userData: this.data.userData
    })
  },
  bindMarriagePlanChange: function (e) {
    let num = e.detail.value;
    this.data.userData.marriagePlan = this.data.marriagePlan[num];
    this.setData({
      userData: this.data.userData
    })
  },
  bindEducationChange: function (e) {
    let num = e.detail.value;
    this.data.userData.education = this.data.educationList[num];
    this.setData({
      userData: this.data.userData
    })
  },
  bindRevenueChange: function (e) {
    let num = e.detail.value;
    this.data.userData.revenue = this.data.revenueList[num];
    this.setData({
      userData: this.data.userData
    })
  },
  bindHousePlanChange: function (e) {
    let num = e.detail.value;
    this.data.userData.house = this.data.housePlan[num];
    this.setData({
      userData: this.data.userData
    })
  },
  bindCarPlanChange: function (e) {
    let num = e.detail.value;
    this.data.userData.car = this.data.carPlan[num];
    this.setData({
      userData: this.data.userData
    })
  },
  bindRelationChange: function (e) {
    let num = e.detail.value;
    if(this.data.userData.gender=='男'){
      this.data.userData.relation = this.data.relationListMan[num];
    }else {
      this.data.userData.relation = this.data.relationListWoman[num];
    }

    this.setData({
      userData: this.data.userData
    })
  },
  clickBar(e){
    let title = e.detail;
    var phoneMask = false;
    var vertifiCodeMask = false;
    var schoolMask = false;
    var personalDescMask = false;
    var spouseDescMask = false;
    console.log(title);
    if(title =='电话'){
      phoneMask = true;
    }else if(title == '学校'){
      schoolMask = true;
    }else if(title == '个人信息'){
      personalDescMask = true;
    }else if(title == '择偶标准'){
      spouseDescMask = true;
    }
    this.setData({
      hideMask:false,
      isPhoneMask:phoneMask,
      isVertifiCodeMask:vertifiCodeMask,
      isSchoolMask:schoolMask,
      isPersonalDescMask:personalDescMask,
      isSpouseDescMask:spouseDescMask
    })
  },
  closeMask(){
    this.setData({
      hideMask:true
    })
  },
  preventTouchMove(){
    return
  },
  chooseImage(){
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success(res) {
        console.log(res.tempFiles.tempFilePath)
        console.log(res.tempFiles.size)
      }
    })
  },
  requestVerticalCode(e){
    //verifi number
    console.log(this.data.inputPhone);
    if(!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(this.data.inputPhone))){
      wx.showToast({
        title: '请输入正确电话号码',
        icon: 'none',
        mask: 'true'
      })
      return;
    }
    this.setData({
      hideMask:false,
      isPhoneMask:false,
      isVertifiCodeMask:true,
      isSchoolMask:false,
      isPersonalDescMask:false,
      isSpouseDescMask:false
    })
  },
  bindKeyInput: function (e) {
    let id = e.currentTarget.dataset.id;
    if(id == 'phone'){
      this.setData({
        inputPhone: e.detail.value
      })
    }else if(id == 'code'){
      this.setData({
        verifiCode: e.detail.value
      })
    }else if(id == 'school'){
      this.setData({
        inputSchool: e.detail.value
      })
    }else if(id == 'personalDesc'){
      this.setData({
        inputPersonalDesc: e.detail.value
      })
    }else if(id == 'spouceDesc'){
      this.setData({
        inputSpouseDesc: e.detail.value
      })
    }

  },
  finishChange: function (e) {
    let id = e.currentTarget.dataset.id;
    if(id == 'code'){
      this.data.userData.phone = this.data.inputPhone;
    }else if(id == 'school'){
      this.data.userData.school = this.data.inputSchool;
    }else if(id == 'personalDesc'){
      this.data.userData.personalDesc = this.data.inputPersonalDesc;
    }else if(id == 'spouceDesc'){
      this.data.userData.spouceDesc = this.data.inputSpouseDesc;
    }
    this.setData({
      hideMask:true,
      inputSchool:'',
      inputPhone:'',
      verifiCode:'',
      inputPersonalDesc:'',
      inputSpouseDesc:'',
      userData: this.data.userData
    })
  }
})
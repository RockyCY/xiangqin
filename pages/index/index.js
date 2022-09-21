// index.js
// 获取应用实例
import{
  getRecommendData
} from "../../service/index"

const app = getApp()

Page({
  data: {
    currentIndex: 0,
    userDataArray:[],
    userData:{
      id:123456,
      gender:'男',
      birthday:'1991-01-01',
      heigh:'170cm',
      weigh:'55kg',
      residentPlace:['广东省', '广州市', '海珠区'],
      hometown:['广东省', '广州市', '海珠区'],
      marriage:'未婚',
      education:'本科',
      school:'清华大学',
      revenue:'10-15W',
      relation:'母子',
      phone:'138*****1234',
      marriagePlan:'',
      car:'',
      house:'',
      personalDesc:'独生女，92年11月生，未婚,身高165，名校毕业，深圳福田国企会计，家住福田，女儿在深圳长大，父在央企做管理工作，母是医生已退休，全家深户，身体健康，无经济压力。',
      spouceDesc:'要求男孩未婚，88年后生，身高170以上，身体健康，本科以上学历，工作稳定，积极上进，有责任心，感情专一的优秀男孩。',
      personalLabel:['1-2年内结婚','已购房','已购车','40-50w/年','北京联合大学'],
      redlineNum:99
   },
    reasons:["年龄偏大","年龄偏小","收入偏高","收入偏低","学历偏大","学历偏小","身高偏大","身高偏小","居住地不匹配","对方信息不全"],
    selectedReasons:{"年龄偏大":false,"年龄偏小":false,"收入偏高":false,"收入偏低":false,"学历偏大":false,"学历偏小":false,"身高偏大":false,"身高偏小":false,"居住地不匹配":false,"对方信息不全":false},
    buttonMargin:(wx.getSystemInfoSync().screenWidth - 300)/2,
    userInfo: {},
    hideMask:true,
    hideActionSheet:true,
    isContactMask:false,
    isDislikeMask:false,
    hasUserInfo: false,
    scrollHeight:wx.getSystemInfoSync().screenHeight - wx.getSystemInfoSync().statusBarHeight - 44,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  
  onLoad() {

    // wx.navigateTo({
    //   url: '../datafill/datafill',
    // })

    // getRecommendData({
    //   data: {
        
    //   }
    // }).then(res => {
    //   if(res && res.code === 0 && res.data) {
    //     this.setData({
    //       hideMask: false
    //     })
    //   }else {
    //     this.setData({
    //       hideMask: true
    //     })
    //   }
    // })
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
      hideActionSheet:true,
      isDislikeMask:false,
      isContactMask:true
    })
  },
  clickFill(){
    wx.navigateTo({
      url: '../personal/personal',
    })
  },
  clickMore(){
    this.setData({
      hideMask:true,
      hideActionSheet:false,
      isDislikeMask:false,
      isContactMask:false
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
      hideActionSheet:true,
      isDislikeMask:true,
      isContactMask:false
    })
  },
  closeMask(e){
    this.setData({
      hideMask:true,
      hideActionSheet:true
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

  report(){
    wx.showToast({
      title: '点击举报',
      icon: 'none',
      mask: 'true'
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

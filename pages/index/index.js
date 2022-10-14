// index.js
// 获取应用实例
import{
  getRecommendData,
  addFavorites,
  cancelFavorites,
  getNotLikeReason,
  addNotLike,
  getPhoneNumber
} from "../../service/index"

const app = getApp()

Page({
  data: {
    recommendDataArray:[],
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
    reasons:[],
    selectedReasons:{},
    buttonMargin:(wx.getSystemInfoSync().screenWidth - 300)/2,
    userInfo: {},
    hideMask:true,
    hideActionSheet:true,
    isContactMask:false,
    isDislikeMask:false,
    hasUserInfo: false,
    scrollHeight:wx.getSystemInfoSync().screenHeight - wx.getSystemInfoSync().statusBarHeight - 44,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  
  onLoad() {
    
    getRecommendData({
      data:{
        
      }
    }).then(
      (res) => {
        for(var item of res.data.data){
          item.birth = item.birth.substring(2,3);
        }
        this.setData({
          recommendDataArray:res.data.data
        })
      }
    )
    
    getNotLikeReason({
      data:{
        
      }
    }).then(
      (res) => {
        var reasonsDict = {};
        for(var reasonItem of res.data.data){
          reasonsDict[reasonItem.name] = false;
        }
        this.setData({
          reasons:res.data.data,
          selectedReasons:reasonsDict
        })
      }
    )    
  },

  onShow(){

  },
  onShareAppMessage:function(res){
    return {
      title:'11111'
    }
  },
  clickCollect(e){
    let user = e.detail;
    addFavorites({
      data:{
        'fateUserInfoId':user.id
      }
    }).then(
      (res) => {
        console.log(res.data)
      }
    )

    // cancelFavorites({
    //   data:{
    //     'fateUserInfoId':user.id
    //   }
    // }).then(
    //   (res) => {
    //     console.log(res.data)
    //   }
    // )
  },
  clickCall(){

    getPhoneNumber({
      data:{
        'fateUserInfoId':3,
      }
    }).then(
      (res) => {
        console.log('getPhoneNumber')
        console.log(res)
        this.setData({
          hideMask:false,
          hideActionSheet:true,
          isDislikeMask:false,
          isContactMask:true
        })
      }
    )
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
    addNotLike({
      data:{
        'fateUserInfoId':3,
        'notLIkeReasons':[201]
      }
    }).then(
      (res) => {
        console.log('addNotLike')
        console.log(res.data)
      }
    )
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
    var selectedStatus = this.data.selectedReasons[reason.name];
    if(selectedStatus == false){
      this.data.selectedReasons[reason.name] = true;
    }else {
      this.data.selectedReasons[reason.name] = false;
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
    wx.navigateTo({
      url: '../report/report',
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

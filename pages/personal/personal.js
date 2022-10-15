// pages/personal/personal.js

import {
  updateUserData,
  getEducation,
  getMarriage,
  getIncome,
  getRelation
} from "../../service/index"

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    scrollHeight: wx.getSystemInfoSync().screenHeight - wx.getSystemInfoSync().statusBarHeight - 44,
    hideMask: true,
    isPhoneMask: false,
    isVertifiCodeMask: false,
    isSchoolMask: false,
    isPersonalDescMask: false,
    isSpouseDescMask: false,
    inputPhone: '',
    verifiCode: '',
    inputSchool: '',
    inputPersonalDesc: '',
    inputSpouseDesc: '',
    descTitleWidth: wx.getSystemInfoSync().screenWidth - 18.5 * 2,
    genderList: ['男', '女'],
    bodyHeighList: ['140cm', '141cm', '142cm', '143cm', '144cm', '145cm', '146cm', '147cm', '148cm', '149cm', '150cm', '151cm', '152cm', '153cm', '154cm', '155cm', '156cm', '157cm', '158cm', '159cm', '160cm', '161cm', '162cm', '163cm', '164cm', '165cm', '166cm', '167cm', '168cm', '169cm', '170cm', '171cm', '172cm', '173cm', '174cm', '175cm', '176cm', '177cm', '178cm', '179cm', '180cm', '181cm', '182cm', '183cm', '184cm', '185cm', '186cm', '187cm', '188cm', '189cm', '190cm', '191cm', '192cm', '193cm', '194cm', '195cm', '196cm', '197cm', '198cm', '199cm', '200cm'],
    bodyWeighList: ['40kg', '41kg', '42kg', '43kg', '44kg', '45kg', '46kg', '47kg', '48kg', '49kg', '50kg', '51kg', '52kg', '53kg', '54kg', '55kg', '56kg', '57kg', '58kg', '59kg', '60kg', '61kg', '62kg', '63kg', '64kg', '65kg', '66kg', '67kg', '68kg', '69kg', '70kg', '71kg', '72kg', '73kg', '74kg', '75kg', '76kg', '77kg', '78kg', '79kg', '80kg', '81kg', '82kg', '83kg', '84kg', '85kg', '86kg', '87kg', '88kg', '89kg', '90kg', '91kg', '92kg', '93kg', '94kg', '95kg', '96kg', '97kg', '98kg', '99kg', '100kg'],
    marriageList: [],
    educationList: [],
    incomeList: [],
    relationListMan: ['父子', '母子', '本人'],
    relationListWoman: ['父女', '母女', '本人'],
    housePlan: ['已购房', '计划购房', '未购房'],
    carPlan: ['已购车', '计划购车', '未购车'],
    marriagePlan: ['半年内结婚', '1-2年结婚', '不着急结婚'],
    date: '1995-01-01',
    region: ['', '', '']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      userInfo: app.globalData.userInfoRes.userInfo
    })
    getIncome({
      data: {}
    }).then(
      (res) => {
        var itemArray = [];
        var itemList = res.data.data;
        for (var key in itemList) {
          var item = itemList[key];
          itemArray.push(item);
        }
        this.setData({
          incomeList: itemArray
        })
      }
    )
    getEducation({
      data: {}
    }).then(
      (res) => {
        var itemArray = [];
        var itemList = res.data.data;
        for (var key in itemList) {
          var item = itemList[key];
          itemArray.push(item);
        }
        this.setData({
          educationList: itemArray
        })
      }
    )
    getMarriage({
      data: {}
    }).then(
      (res) => {
        var itemArray = [];
        var itemList = res.data.data;
        for (var key in itemList) {
          var item = itemList[key];
          itemArray.push(item);
        }
        this.setData({
          marriageList: itemArray
        })
      }
    )
    getRelation({
      data: {}
    }).then(
      (res) => {
        var itemArray = [];
        var itemList = res.data.data;
        for (var key in itemList) {
          var item = itemList[key];
          itemArray.push(item);
        }
        this.setData({
          relationListMan: itemArray
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

  bindGenderChange: function (e) {
    let num = e.detail.value;
    if (this.data.userInfo.sex != this.data.genderList[num]) {
      if (this.data.genderList[num] == '男') {
        this.data.userInfo.relationStr = '父子';
      } else {
        this.data.userInfo.relationStr = '父女';
      }
    }
    this.data.userInfo.genderStr = this.data.genderList[num];
    this.setData({
      userInfo: this.data.userInfo
    })
  },
  bindDateChange: function (e) {
    this.data.userInfo.birth = e.detail.value;
    this.setData({
      userInfo: this.data.userInfo
    })
  },
  bindHeighChange: function (e) {
    let num = e.detail.value;
    this.data.userInfo.height = this.data.bodyHeighList[num];
    this.setData({
      userInfo: this.data.userInfo
    })
  },
  bindWeighChange: function (e) {
    let num = e.detail.value;
    this.data.userInfo.weigh = this.data.bodyWeighList[num];
    this.setData({
      userInfo: this.data.userInfo
    })
  },
  bindRegion1Change: function (e) {
    this.data.userInfo.address = e.detail.value;

    updateUserData({
      data: {
        'id': this.data.userInfo.id,
        'address': this.data.userInfo.address
      }
    }).then(
      (res) => {
        this.setData({
          userInfo: this.data.userInfo
        })
      }
    )
  },
  bindRegion2Change: function (e) {
    this.data.userInfo.hometown = e.detail.value;
    updateUserData({
      data: {
        'id': this.data.userInfo.id,
        'hometown': this.data.userInfo.hometown
      }
    }).then(
      (res) => {
        this.setData({
          userInfo: this.data.userInfo
        })
      }
    )
  },
  bindMarriageChange: function (e) {
    let num = e.detail.value;
    this.data.userInfo.marriage = this.data.marriageList[num];
    this.setData({
      userInfo: this.data.userInfo
    })
  },
  bindMarriagePlanChange: function (e) {
    let num = e.detail.value;
    this.data.userInfo.marriagePlan = this.data.marriagePlan[num];
    this.setData({
      userInfo: this.data.userInfo
    })
  },
  bindEducationChange: function (e) {
    let num = e.detail.value;
    this.data.userInfo.education = this.data.educationList[num];
    this.setData({
      userInfo: this.data.userInfo
    })
  },
  bindIncomeChange: function (e) {
    let num = e.detail.value;
    this.data.userInfo.income = this.data.incomeList[num];
    updateUserData({
      data: {
        'id': this.data.userInfo.id,
        'income': num + 1
      }
    }).then(
      (res) => {
        this.setData({
          userInfo: this.data.userInfo
        })
      }
    )
  },
  bindHousePlanChange: function (e) {
    let num = e.detail.value;
    this.data.userInfo.house = this.data.housePlan[num];
    this.setData({
      userInfo: this.data.userInfo
    })
  },
  bindCarPlanChange: function (e) {
    let num = e.detail.value;
    this.data.userInfo.car = this.data.carPlan[num];
    this.setData({
      userInfo: this.data.userInfo
    })
  },
  bindRelationChange: function (e) {
    let num = e.detail.value;
    if (this.data.userInfo.sex == '男') {
      this.data.userInfo.relation = this.data.relationListMan[num];
    } else {
      this.data.userInfo.relation = this.data.relationListWoman[num];
    }

    this.setData({
      userInfo: this.data.userInfo
    })
  },
  clickBar(e) {
    let title = e.detail;
    var phoneMask = false;
    var vertifiCodeMask = false;
    var schoolMask = false;
    var personalDescMask = false;
    var spouseDescMask = false;
    console.log(title);
    if (title == '电话') {
      phoneMask = true;
    } else if (title == '学校') {
      schoolMask = true;
    } else if (title == '个人信息') {
      personalDescMask = true;
    } else if (title == '择偶标准') {
      spouseDescMask = true;
    }
    this.setData({
      hideMask: false,
      isPhoneMask: phoneMask,
      isVertifiCodeMask: vertifiCodeMask,
      isSchoolMask: schoolMask,
      isPersonalDescMask: personalDescMask,
      isSpouseDescMask: spouseDescMask
    })
  },
  closeMask() {
    this.setData({
      hideMask: true
    })
  },
  preventTouchMove() {
    return
  },
  chooseImage() {
    let picId = this.data.userInfo.id;
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success(res) {
        console.log('test')
        console.log(picId)
        console.log(res.tempFiles[0])
        wx.cloud.uploadFile({
          cloudPath: 'avatar/'+picId+'.png', // 对象存储路径，根路径直接填文件名，文件夹例子 test/文件名，不要 / 开头
          filePath: res.tempFiles[0].tempFilePath, // 微信本地文件，通过选择图片，聊天文件等接口获取
          config: {
            env: 'prod-9ggc7xkmfcc18237' // 需要替换成自己的微信云托管环境ID
          }
        }).then(res => {
          console.log(res.fileID)
          this.data.userInfo.avatarUrl = res.tempFiles[0].tempFilePath;
          updateUserData({
            data: {
              'id': this.data.userInfo.id,
              'photo': res.fileID
            }
          }).then(
            (res) => {
              this.setData({
                userInfo: this.data.userInfo
              })
            }
          )
        }).catch(error => {
          console.log('testFailed')
          console.error(err)
        })
      }
    })
  },
  requestVerticalCode(e) {
    //verifi number
    console.log(this.data.inputPhone);
    if (!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(this.data.inputPhone))) {
      wx.showToast({
        title: '请输入正确电话号码',
        icon: 'none',
        mask: 'true'
      })
      return;
    }
    this.setData({
      hideMask: false,
      isPhoneMask: false,
      isVertifiCodeMask: true,
      isSchoolMask: false,
      isPersonalDescMask: false,
      isSpouseDescMask: false
    })
  },
  bindKeyInput: function (e) {
    let id = e.currentTarget.dataset.id;
    if (id == 'phone') {
      this.setData({
        inputPhone: e.detail.value
      })
    } else if (id == 'code') {
      this.setData({
        verifiCode: e.detail.value
      })
    } else if (id == 'school') {
      this.setData({
        inputSchool: e.detail.value
      })
    } else if (id == 'personalDesc') {
      this.setData({
        inputPersonalDesc: e.detail.value
      })
    } else if (id == 'spouceDesc') {
      this.setData({
        inputSpouseDesc: e.detail.value
      })
    }

  },
  finishChange: function (e) {
    let id = e.currentTarget.dataset.id;
    if (id == 'code') {
      this.data.userInfo.phone = this.data.inputPhone;
    } else if (id == 'school') {
      this.data.userInfo.school = this.data.inputSchool;
    } else if (id == 'personalDesc') {
      this.data.userInfo.personalDesc = this.data.inputPersonalDesc;
    } else if (id == 'spouceDesc') {
      this.data.userInfo.spouceDesc = this.data.inputSpouseDesc;
    }
    this.setData({
      hideMask: true,
      inputSchool: '',
      inputPhone: '',
      verifiCode: '',
      inputPersonalDesc: '',
      inputSpouseDesc: '',
      userInfo: this.data.userInfo
    })
  },
})
// component/profileCard/profileCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    cardMargin:0.02 * wx.getSystemInfoSync().screenWidth,
    seperateMargin:0.07 * wx.getSystemInfoSync().screenWidth,
    labelMargin: 0.93 * 0.05 * wx.getSystemInfoSync().screenWidth,
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
   }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickFillHandle(){
      this.triggerEvent('clickFillHandle');
    },
  }
})

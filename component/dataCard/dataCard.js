// component/dataCard/dataCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentUserData:{
      type:Object,
      value:null
    },
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
      gender:'男',
      birthday:'91年',
      heigh:'170cm',
      weigh:'55kg',
      residentPlace:['广东省', '广州市', '海珠区'],
      hometown:['福建省', '厦门市', '湖里区'],
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
   }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickShareHandle(){
      this.triggerEvent('clickShareHandle',this.properties.currentUserData);
    },
    clickCollectHandle(){
      this.triggerEvent('clickCollectHandle',this.properties.currentUserData);
    },
    clickCallHandle(){
      this.triggerEvent('clickCallHandle',this.properties.currentUserData);
    },
    clickMore(){
      this.triggerEvent('clickMore',this.properties.currentUserData);
    },
    longPressHandle(){
      this.triggerEvent('longPressHandle',this.properties.currentUserData);
    }
  }
})

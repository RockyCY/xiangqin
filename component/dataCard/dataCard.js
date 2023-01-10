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
    ifAudit:{
      type:Boolean,
      value:false
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    cardMargin:0.02 * wx.getSystemInfoSync().screenWidth,
    seperateMargin:0.07 * wx.getSystemInfoSync().screenWidth,
    labelMargin: 0.93 * 0.05 * wx.getSystemInfoSync().screenWidth
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

// component/fillCard/fillCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
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
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickFillHandle(){
      this.triggerEvent('clickFillHandle');
    }
  }
})

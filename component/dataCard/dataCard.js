// component/dataCard/dataCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentIndex:0,
    cardData:{
      type:Object,
      value:null
    }
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
      this.triggerEvent('clickShareHandle');
    },
    clickCollectHandle(){
      this.triggerEvent('clickCollectHandle');
    },
    clickCallHandle(){
      this.triggerEvent('clickCallHandle');
    },
    longTapHandle(){
      this.triggerEvent('longTapHandle');
    }
  }
})

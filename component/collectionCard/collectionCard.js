// component/collectionCard/collectionCard.js
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
     cardMargin:0.05 * wx.getSystemInfoSync().screenWidth
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickDataHandle(){
      this.triggerEvent('clickDataHandle');
    },
    clickShareHandle(){
      this.triggerEvent('clickShareHandle');
    }
  }
})

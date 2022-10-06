// component/collectionCard/collectionCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userData:{
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
      this.triggerEvent('clickDataHandle',this.properties.userData);
    },
    clickShareHandle(){
      this.triggerEvent('clickShareHandle',this.properties.userData);
    }
  }
})

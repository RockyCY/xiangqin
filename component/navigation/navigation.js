// component/navigation/navigation.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      title:{
        type:String,
        value:''
      },
      hideBackBtn:{
        type:Boolean,
        value:true
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    type:"组件",
    bar_height:wx.getSystemInfoSync().statusBarHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickBackHandle(){
      wx.navigateBack({
        delta: 0,
      })
    }
  }
})

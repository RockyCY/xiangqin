// component/personalBar/personalBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     mainTitle:{
       type:String,
       value:''
     },
     subTitle:{
       type:String,
       value:''
     },
     hideBottomLine:{
        type:Boolean,
        value:false
     },
     hideArrow:{
        type:Boolean,
        value:false
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
     bottomLineMargin: 0.05 * wx.getSystemInfoSync().screenWidth
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

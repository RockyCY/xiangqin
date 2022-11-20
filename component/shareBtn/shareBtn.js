// component/shareBtn/shareBtn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    btnWidth:{
      type:String,
      value:''
    },
    btnHeigh:{
      type:String,
      value:''
    },
    btnFontSize:{
      type:String,
      value:''
    },
    userData:{
      type:Object,
      value:null
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickHandle(){
      this.triggerEvent('clickHandle',this.properties.userData);
    }
  }
})

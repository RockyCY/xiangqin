// component/selectedBtn/selectedBtn.js
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
    btnText:{
      type:String,
      value:''
    },
    btnFontSize:{
      type:String,
      value:''
    },
    selectedable:{
      type:Boolean,
      value:false
    },
    selected:{
      type:Boolean,
      value:false
    },
    buttonNum:{
      type:Number,
      value:0
    }
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
      this.triggerEvent('clickHandle',this.properties.buttonNum);
    }
  }
})

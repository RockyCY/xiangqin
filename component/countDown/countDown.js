// component/countDown/countDown.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    countSecond:{
      type:Number,
      value:0,
      observer(newVal,oldVal){
        this.countDownFn(newVal);
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    countInterval: null,
    countDown: {
      day: '00',
      hour: '00',
      minute: '00',
      second: '00',
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    num(num) {
      return num < 10 ? `0${num}` : `${num}`;
    },
    countDownFn(intDiff) {
      let delta = intDiff / 1000;
      this.data.countInterval = setInterval(() => {
        let day = 0;
        let hour = 0;
        let minute = 0;
        let second = 0;
  
        const DMS = 24 * 60 * 60;
        day = this.num(Math.floor(delta / DMS));
  
        const h1 = delta / 3600;
        const h2 = day * 24;
        hour = this.num(Math.floor(h1 - h2));
  
        const m1 = delta / 60;
        const m2 = day * 24 * 60;
        const m3 = hour * 60;
        minute = this.num(Math.floor(m1 - m2 - m3));
  
        const s1 = day * 24 * 3600;
        const s2 = hour * 3600;
        const s3 = minute * 60;
        second = this.num(Math.floor(delta - s1 - s2 - s3));
  
        this.setData({
          countDown : {
            day,
            hour,
            minute,
            second,
          }
        });
  
        delta -= 1;
  
        if (delta < 0) {
          clearInterval(this.data.countInterval);
          this.setData({
            countInterval:null,
            countDown: {
              day: '00',
              hour: '00',
              minute: '00',
              second: '00',
            }
          });
        }
      }, 1000);
    },
  }
})

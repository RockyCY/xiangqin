// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        if (res.code) {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          wx.cloud.init()
          // 下面的请求可以在页面任意一处使用
          const result = wx.cloud.callContainer({
            config: {
              env: 'prod-9ggc7xkmfcc18237', // 微信云托管的环境ID
            },
            path: '/api/login', // 填入业务自定义路径和参数，根目录，就是 / 
            method: 'POST', // 按照自己的业务开发，选择对应的方法
            header: {
              'X-WX-SERVICE': 'springboot-cc0m', // xxx中填入服务名称（微信云托管 - 服务管理 - 服务列表 - 服务名称）
              'content-type': 'application/json',
            },
            data: {
              code: res.code
            },
            // dataType:'text', // 默认不填是以 JSON 形式解析返回结果，若不想让 SDK 自己解析，可以填text
          })
          console.log('登录成功')
          console.log(res)
        } else {
          console.log('登录失败' + res.errMsg)
        }
      }
    })

    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          //已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfoRes = res;
            }
          })
        } else {
          wx.getUserProfile({
            desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
              this.globalData.userInfoRes = res;
            }
          })
        }
      }
    })
  },
  globalData: {
    loginData: null,
    userInfoRes: {},
    userPropDetail:null,
  }
})
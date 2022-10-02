const HOST = 'https://springboot-cc0m-1610-4-1313078534.sh.run.tcloudbase.com';

const app = getApp()

/**
 * 
 * @param {String} uri 
 * @param {Object} options 
 */

export function cloudRequest(uri, options = {}) {
  let {
    header,
    success,
    fail,
    method,
    data
  } = options;
  method = method && method.toUpperCase();
  method == 'POST' &&
    (options.header = Object.assign({
      'X-WX-SERVICE': 'springboot-cc0m'
    }, options.header, {
      'content-type': 'application/json'
    }));
    let params = Object.assign({}, {}, data);
    delete options.data;
    wx.cloud.init();
    const result = wx.cloud.callContainer({
      config: {
        env: 'prod-9ggc7xkmfcc18237', // 微信云托管的环境ID
      },
      path: uri, // 填入业务自定义路径和参数，根目录，就是 / 
      data: params,
      ...options
      // dataType:'text', // 默认不填是以 JSON 形式解析返回结果，若不想让 SDK 自己解析，可以填text
    })
    return result;
}

export function http(uri, options = {}) {
  let publicParams = {};
  let {
    header,
    success,
    fail,
    method,
    data
  } = options;
  method = method && method.toUpperCase();
  method == 'POST' &&
    (options.header = Object.assign({
      'X-Token': wx.getStorageSync('token')
    }, options.header, {
      'content-type': 'application/json'
    }));
  // let params = Object.assign({}, publicParams,data);
  let params = Object.assign({}, {}, data);

  let promise = new Promise((resolve, reject) => {
    options = Object.assign({}, options, {
      success: res => {
        if (res.data.code === 1001) {
          resetUserInfo();
          wx.showToast({
            title: '登录已过期，请重新登录',
            icon: 'none',
            duration: 2500
          })
        }
        resolve(res.data);
      },
      fail: res => {
        wx.hideLoading();
        // console.log(res.errMsg);
        wx.showToast({
          title: res.msg || '请检查您的网络',
          icon: 'none',
          duration: 2500
        })
        reject(res)
      }
    });

    delete options.data;
    wx.request({
      url: uri.indexOf('https://') < 0 ? HOST + uri : uri,
      data: params,
      ...options
    });
  });

  function resetUserInfo() {
    wx.setStorageSync('avatarUrl', '');
    wx.setStorageSync('nickName', '');
    wx.setStorageSync('remainingUsageCount', 0);
    wx.setStorageSync('phone', '');
    app.globalData.nickName = '';
    app.globalData.avatarUrl = '';
    app.globalData.remainingUsageCount = 0;
    app.globalData.phone = '';
  }
  return promise;
}
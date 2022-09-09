const HOST = 'https://springboot-cc0m-1610-4-1313078534.sh.run.tcloudbase.com';

const app = getApp()

/**
 * 
 * @param {String} uri 
 * @param {Object} options 
 */

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
    (options.header = Object.assign({'X-Token':wx.getStorageSync('token')}, options.header, {
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
          title: res.msg ||  '请检查您的网络',
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

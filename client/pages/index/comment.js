var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  
    util.showBusy('请求中...')
    var that = this
    var options = {
      url: config.service.addDis,
      data: 
        e.detail.value,
      login: true,
      success(result) {
        util.showSuccess('请求成功完成')
        console.log('request success', result)
        that.setData({
          // requestResult: JSON.stringify(result.data)
          //requestResult: result.data
        })

        // 关闭当前页面，跳转到应用内的某个页面。
        wx.redirectTo({
          url: 'page/home/home?user_id=111'
        })

        // 跳转到tabBar页面（在app.json中注册过的tabBar页面），同时关闭其他非tabBar页面。
        /*wx.switchTab({
          url: 'page/index/index'
        })
        */


      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    }

    wx.request(options)

  },
//end formsubmit

  formReset: function () {
    console.log('form发生了reset事件')
  }
})
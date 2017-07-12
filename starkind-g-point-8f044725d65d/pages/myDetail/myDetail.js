var Events = require('../../services/events')

// 引入 QCloud 小程序增强 SDK
var qcloud = require('../../vendor/wafer-client-sdk/index.js');

// 引入配置
var config = require('../../config');
// detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      event: Events.getEventById(options.id)
      // event: Events.getAllEvents()[Math.floor(20 * Math.random())]
      // event: events[18]
    })

    var self = this;
    qcloud.request({
      url: `https://${config.service.host}/api/event/` + options.id,
      data: {

      },
      header: {
        'content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        self.setData({
          event: res.data.data
        })
      }
    })
    console.log("haha")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  joinSpecEvent: function (e) {
    var self = this;
    qcloud.request({
      url: `https://${config.service.host}/api/participation/` + e.currentTarget.dataset.id,
      data: {

      },
      header: {
        'content-Type': 'application/json'
      },
      method: 'POST',
      success: function (res) {
        console.log(res);
        self.setData({
          html: res.data
        })
      }
    })
  },

  quitSpecEvent: function (e) {
    var self = this;
    qcloud.request({
      url: `https://${config.service.host}/api/invitation/` + e.currentTarget.dataset.id +`/participant/594dfe7b84d61b1159ade904`,
      data: {

      },
      header: {
        'content-Type': 'application/json'
      },
      method: 'DELETE',
      success: function (res) {
        console.log(res);
        self.setData({
          html: res.data
        })
      }
    })
  },

  deleteSpecEvent: function (e) {
    var self = this;
    qcloud.request({
      url: `https://${config.service.host}/api/invitation/` + e.currentTarget.dataset.id,
      data: {

      },
      header: {
        'content-Type': 'application/json'
      },
      method: 'DELETE',
      success: function (res) {
        console.log(res);
        self.setData({
          html: res.data
        })
      }

    })
  }
})
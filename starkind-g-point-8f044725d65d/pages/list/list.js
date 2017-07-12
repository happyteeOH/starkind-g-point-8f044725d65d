var Events = require('../../services/events')

// 引入 QCloud 小程序增强 SDK
var qcloud = require('../../vendor/wafer-client-sdk/index.js');

// 引入配置
var config = require('../../config');

// list.js
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
    var self = this;
    qcloud.request({
      url: `https://${config.service.host}/api/invitations`,
      data: {

      },
      header: {
        'content-Type': 'application/json'
      },
      success: function (res) {
        //var time = res.data.data.event.eventInfo.time.getYear();
        console.log(res);
        self.setData({
          events: res.data.data
        })
      }
    })
  
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

  getMyEvents: function(){
    var self = this;
    qcloud.request({
      url: `https://${config.service.host}/api/users`,
      data: {

      },
      header: {
        'content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        self.setData({
          html: res.data
        })
      }
    })
  },
})
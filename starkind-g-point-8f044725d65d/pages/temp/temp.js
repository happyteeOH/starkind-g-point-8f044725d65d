// create.js

// 引入 QCloud 小程序增强 SDK
var qcloud = require('../../vendor/wafer-client-sdk/index.js');

// 引入配置
var config = require('../../config');

var QQMapWX = require('../../qqmap-wx-jssdk1.0/qqmap-wx-jssdk.js');
var demo;

var app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;

    demo = new QQMapWX({
      key: 'IPOBZ-CZ23W-J4LRT-RTYTA-DFDLV-QWBAC'
    });
    app.getUserInfo(userInfo => {
      self.setData({
        user: userInfo
      })
    })
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
  
  testTencentMap: function () {
    var self = this;

  }
})
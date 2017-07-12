// create.js

// 引入 QCloud 小程序增强 SDK
var qcloud = require('../../vendor/wafer-client-sdk/index.js');

// 引入配置
var config = require('../../config');

var QQMapWX = require('../../qqmap-wx-jssdk1.0/qqmap-wx-jssdk.js');
var demo;

var app = getApp();

var locationX;


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
        user:userInfo
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
  
  modalTap: function(e) {
    this.setData({
      modalHidden: false
    })
  },

  modalConfirm: function(e) {
    this.setData({
      modalHidden: true
    }),
    console.log(e);
  },

  modalCancel: function(e){
    this.setData({
      modalHidden: true
    }),
    console.log(e);
  },

  popupWindow: function(){
    wx.showModal({
      title: 'tips',
      content: 'Pop up window',
      success: function(res){
        if (res.confirm){
          console.log('click confirmed')
        }
      }
    })
  },


  getweixinTap:() => {
    var self=this;
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

  formSubmit: function (e) {
    /*
    this.setData({
      modalHidden: false
    })
    */
    var self=this;

    var x = locationX;

    var dateTime = e.detail.value.date + " " + e.detail.value.time;
    var dateTimeVal = Date.parse(dateTime);
    qcloud.request({
      url:`https://${config.service.host}/api/invitation`,
      login: true,
      data:{ 
       time: dateTimeVal,
       capacity: e.detail.value.capacity,
       title: e.detail.value.title,
       description: e.detail.value.description,
       location: locationX,
      },
      header: {
        'content-Type': 'application/json'
      },
      method: 'POST',
      success: function(response) {
        console.log(response);
      },
      fail: function (err) {
        console.log(err);
      }
    })

    console.log('submit');
    console.log(e.detail.value);
  },

  formReset: function (e) {
    console.log('reset')
  },

  bindDateChange: function (e) {
    console.log('Date Changed')
    console.log(e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  bindTimeChange: function (e) {
    console.log('Time changed')
    console.log(e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },

  mapTap: function () {
    var self = this;
    var ret;
    wx.getLocation({
      //定位类型 wgs84, gcj02
      type: 'gcj02',      
      success: function (res) {
        console.log(res)
        wx.openLocation({
          //当前经纬度
          latitude: res.latitude,
          longitude: res.longitude,
          name: 'a',
          //缩放级别默认28
          scale: 28,
          //位置名
          //详细地址
          address: 'b',
          //成功打印信息
          success: function (res) {
            demo.reverseGeocoder({
              location: {
                latitude: res.latitude,
                longitude: res.longitude
              },
              success: function (res) {
                console.log(res);
                self.setData({
                  resData: res.result
                })
              },
              fail: function (res) {
                console.log(res);
              },
              complete: function (res) {
                console.log(res);
              }
            })
            
            console.log(resData);
            console.log(res)
          },
          //失败打印信息
          fail: function (err) {
            console.log(err)
          },
          //完成打印信息
          complete: function (info) {
            console.log(info)
          },
        })
        

      },
      fail: function (err) {
        console.log(err)
      },
      complete: function (info) {
        console.log(info)
      },
    })
  },

  locationTap: function () {
    var self = this;
    wx.getLocation({
      success: function (res) {
        console.log(res)
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 28,
          name: 'Current Location',
          address: 'unknown location',
          success: function (res) {
            console.log(res)
          },

          fail: function (err) {
            console.log(err)
          },

          complete: function (info) {
            console.log(info)
          },
        })
      },
    })
  },

  testTencentMap: function(e){
    var self = this;
    wx.chooseLocation({
      success: function (e) {
        // success
        console.log(e)
        locationX = e.name
        self.setData({
          location: e.name,
          hasLocation: true,

        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

  },



  navigateTo: function () {
    wx.navigateTo({
      url: '../myList/myList',
    })
  }
})
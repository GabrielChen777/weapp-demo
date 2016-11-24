'use strict';

// 获取全局应用程序实例对象
var app = getApp();

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'About',
    userInfo: {
      wechat: 'WEDN-NET',
      nickName: '汪磊(iceStone)',
      avatarUrl: '../../images/wechat.jpg'
    }
  },

  getUserInfo: function getUserInfo() {
    var that = this;
    app.wechat.getUserInfo().then(function (res) {
      return that.setData({ userInfo: res.userInfo });
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad() {
    app.wechat.login().then(function (res) {
      if (res.code) {
        console.log('登录成功！' + res.code);
      } else {
        console.error('获取用户登录态失败！' + res.errMsg);
      }
    });
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {
    // TODO: onReady
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    // TODO: onShow
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {
    // TODO: onHide
  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {
    // TODO: onUnload
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {
    // TODO: onPullDownRefresh
  }
});
//# sourceMappingURL=profile.js.map

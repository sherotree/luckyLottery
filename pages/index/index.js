// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lottery_res:[]
  },

  /* 更新数据 */
  _loadMore: function () {
    const that = this;
    wx.request({
      url: 'https://apis.juhe.cn/lottery/history?key=96ba11ab9a0c841e566060163bcd1128&lottery_id=dlt&page_size=8&page=1',
    });
    wx.request({
      url: 'https://apis.juhe.cn/lottery/history?key=96ba11ab9a0c841e566060163bcd1128&lottery_id=ssq&page_size=8&page=1',
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
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

  }
})
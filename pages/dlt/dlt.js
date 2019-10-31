// pages/dlt/dlt
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lotteryList: [],
    page: 1,
    isShowUp:false,
    showUp:function(event) {
    }
  },

  showUp: function(event) {
    const that = this;
    that.setData({
      isShowUp:!that.isShowUp
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadMore();
  },

  _loadMore: function () {
    const that = this;
    wx.request({
      url: `https://apis.juhe.cn/lottery/history?key=96ba11ab9a0c841e566060163bcd1128&lottery_id=dlt&page_size=8&page=${that.data.page}`,
      success: function (res) {
        console.log(res.data.result)
        that.setData({
          lotteryList: [
            ...that.data.lotteryList,
            ...res.data.result.lotteryResList.map(item => ({
              ...item,
              lottery_res: item.lottery_res.split(','),
              // lottery_pool_amount: (item.lottery_pool_amount.replace(/,/g, '') / Math.pow(10, 9)).toFixed(2)
            }))
          ],
          page: that.data.page + 1,
        })
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this._loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '超级大乐透开奖结果'
    }
  }
})
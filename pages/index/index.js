// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ssqList:[],
    ssqBall:[],
    ssqPool:0,
    dltList:[],
    dltBall:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    wx.request({
      url: 'https://apis.juhe.cn/lottery/query?key=96ba11ab9a0c841e566060163bcd1128&lottery_id=ssq',
      success: function (res) {
        // console.log(res)
        that.setData({
          ssqBall: res.data.result.lottery_res.split(','),
          ssqList:res.data.result,
          ssqPool: (res.data.result.lottery_pool_amount.replace(/,/g, '') / Math.pow(10, 8)).toFixed(2)
        })
      }
    });
    wx.request({
      url: 'https://apis.juhe.cn/lottery/query?key=96ba11ab9a0c841e566060163bcd1128&lottery_id=dlt',
      success: function (res) {
        console.log(res)
        that.setData({
          dltBall: res.data.result.lottery_res.split(','),
          dltList:res.data.result
        })
      }
    })
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title:'真好彩'
    }
  }
})
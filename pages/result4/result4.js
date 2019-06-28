Page({
  data: {
    name: ''
  },
  onLoad: function (e) {
    this.setData({
      name: e.id
    })
    console.log(e)
  },
  onShareAppMessage: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
  },
})
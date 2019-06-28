Page({
  data:{

  },
  onLoad:function(){

  },
  onShareAppMessage: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
  },
})
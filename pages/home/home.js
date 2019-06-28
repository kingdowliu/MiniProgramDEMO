Page({

  /**
   * 页面的初始数据
   */
  data: {
    harmfulWaste:[
      '电池','电子','灯管','灯泡','药品','化妆品','染发剂','杀虫剂','除草剂','水银',
      '温度计','油漆','墨盒','硒鼓','塑料药瓶'
    ],
    recyclableWaste:[
      '电子塑料包装', '可降解塑料盒', '塑料盖', '塑料包装盒', '塑料酸奶盒', '塑料收纳盒', '塑料杯', '塑料晾衣架', '塑料牛奶壶', '塑料笔盒', '塑料泡沫', '塑料花瓶', '塑料文件袋', '塑料卡片', '塑料玩具', '塑料盒', '食品塑料罐', '可降解塑料', '废塑料', '塑料水瓶', '塑料饮料瓶', '干净的塑料', '塑料洗发水瓶', '塑料文具', '塑料罐', '塑料水果筐', '塑料纽扣', '塑料保鲜盒', '塑料板', '塑料蛋盒', '塑料钟表', '塑料筐PER', '塑料篮', '塑料水果盒', '塑料餐具', '塑料盆', '塑料盒', '塑料尺', '食用油塑料桶', '塑料剃须刀', '塑料模型', '塑料凳', '塑料管道', '塑料梳子', '塑料垫', '塑料箱', '望料毯', '塑料飞碟', '塑料鞋', '塑料桶','硬塑料','纸','书','杂志','金','银','铜','铁','铝','玻璃','塑料','橡胶','盒子','饮料瓶',
      '可乐罐','啤酒瓶'
    ],
    wetGarbage:[
      '猪爪骨','骨头渣','鱼骨头','鸡鸭骨头','牛蛙骨头','小骨头','小排骨头','动物骨头',
      '碎骨','植物叶子','茶叶渣','包菜叶','萝卜叶','艾叶','白菜叶','菜梗','绿叶菜',
      '芹菜叶','青菜叶','蔬菜茎叶','花草树叶','茶叶','桑叶','烟叶','芭蕉叶','枇杷叶'
    ],
    dryGarbage:[
      '猪骨头','牛肉骨头','肉骨头','大排骨头','蹄膀骨头','骨头棒','大骨头','狗骨头','骨头', '骨头', '羊骨头', '玉米叶', '粽叶', '包装茶叶', '芦苇叶','包装塑料袋','塑料打包盒', '塑料手套', '食品塑料包装盒', '塑料打包绳', '水果塑料套', '塑料调料包', '塑料外包装', '塑料拖把', '塑料尿包', '咖啡纸杯', '塑料膜', '塑料包书皮', '内表面附塑料膜', '塑料布', '塑料包装', '塑料奶茶杯', '塑料纸', '塑料包装袋', '一次性塑料杯', '次性塑料餐具', '塑料包装纸', '塑料笔', '塑料吸管', '速冻饺子塑料盒','塑料笔壳','塑料花', '塑料胶带', '塑料笔套', '塑料扇', '塑料壳', '塑料餐盒', '塑料牙刷', '塑料袋', '塑料打火机','可降解塑料袋'
    ]
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
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  // 查询
  doQuery:function(e){
    var that = this
    if (e.detail.value.inputvalue==''){
      wx.navigateTo({
        url: '/pages/result1/result1?' + 'id=' + '塑料'
      })
    } else if (that.data.recyclableWaste.indexOf(e.detail.value.inputvalue)!=-1){
      wx.navigateTo({
        url: '/pages/result1/result1?' + 'id=' + e.detail.value.inputvalue
      })
    } else if (that.data.dryGarbage.indexOf(e.detail.value.inputvalue) != -1) {
      wx.navigateTo({
        url: '/pages/result2/result2?' + 'id=' + e.detail.value.inputvalue
      })
    } else if (that.data.wetGarbage.indexOf(e.detail.value.inputvalue) != -1) {
      wx.navigateTo({
        url: '/pages/result3/result3?' + 'id=' + e.detail.value.inputvalue
      })
    } else if (that.data.harmfulWaste.indexOf(e.detail.value.inputvalue) != -1) {
      wx.navigateTo({
        url: '/pages/result4/result4?' + 'id=' + e.detail.value.inputvalue
      })
    }else{
      wx.navigateTo({
        url: '/pages/noResult/noResult'
      })
    }
    // var that = this
    // console.log(e.detail.value.inputvalue)
    // wx.navigateTo({
    //   url: '/pages/result2/result2?' + 'id=' + e.detail.value.inputvalue
    // })
  }
})
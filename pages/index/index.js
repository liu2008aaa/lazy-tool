//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    num:undefined,
    max:undefined
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    try { wx.showShareMenu({}) } catch (e) { console.log("has error:" + e) }
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  bindblurOfNum: function (e) {
    console.log(e.detail.value);
    var num = e.detail.value;
    if (num == undefined || num.length == 0) {
      return;
    }
    var reg = new RegExp("^[0-9]*$");
    if (!reg.test(num)) {
      app.toast.showFail('人数填错了哈', 2000);
      return;
    }
    this.setData({ num: num });
  },
  bindblurOfMax:function(e){
    console.log(e.detail.value);
    var max = e.detail.value;
    if (max == undefined || max.length == 0){
        return;
    }    
    var reg = new RegExp("^[0-9]*$");
    if (!reg.test(max)){
        app.toast.showFail('金额填错了哈',2000);
        return;
    } 
    this.setData({ max: max });
  },
  next:function(){
    var num = this.data.num;
    var max = this.data.max;
    if(num == undefined || max == undefined || num == '' || max == ''){
        app.toast.showFail('没填好！', 2000);
        return;
    }
    wx.navigateTo({
      url: '../logs/logs?max=' + max + "&num=" + num
    })
  },
  reset:function(){
    this.setData({num:'',max:''});
  }
})

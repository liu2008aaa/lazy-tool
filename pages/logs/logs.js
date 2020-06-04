//logs.js
const util = require('../../utils/util.js');
const app = getApp();
Page({
  data: {
    tips:'我正在思考....', 
    list: [
      { name: '豆瓣鱼', price: 60 },
      { name: '麻辣鱼', price: 60 },
      { name: '藿香鱼', price: 60 },
      { name: '鲜椒仔兔', price: 40 },
      { name: '特色双脆', price: 40 },
      { name: '辣子鸡', price: 40 },
      { name: '泡椒牛柳', price: 35 },
      { name: '金汤肥牛', price: 40 },
      { name: '跳水蛙', price: 60 },
      { name: '麻辣牛肉', price: 40 },
      { name: '鲜椒鸡', price: 40 },
      { name: '湘味小炒肉', price: 30 },
      { name: '毛血旺', price: 40 },
      { name: '豆花肥肠', price: 40 },
      { name: '水煮肉片', price: 30 },
      { name: '小炒肝片', price: 30 },
      { name: '小炒猪头肉', price: 30 },
      { name: '大蒜肚条', price: 45 },
      { name: '葱椒鸡', price: 30 },
      { name: '拌土鸡', price: 28 },
      { name: '葱泥白肉', price: 30 },
      { name: '千千丝', price: 15 },
      { name: '爽口木耳', price: 15 },
      { name: '凉拌拱嘴', price: 35 },
      { name: '大刀耳片', price: 30 },
      { name: '蒜泥黄瓜', price: 12 },
      { name: '烧椒茄子', price: 12 },
      { name: '青椒皮蛋', price: 15 },
      { name: '拌猪脚', price: 35 },
      { name: '回锅肉', price: 25 },
      { name: '青椒肉丝', price: 20 },
      { name: '韭黄肉丝', price: 20 },
      { name: '蒜薹肉丝', price: 20 },
      { name: '尖椒肉丝', price: 20 },
      { name: '鱼香肉丝', price: 20 },
      { name: '木耳肉丝', price: 20 },
      { name: '苦瓜肉丝', price: 20 },
      { name: '木耳肉片', price: 20 },
      { name: '火爆肥肠', price: 30 },
      { name: '香锅花菜', price: 20 },
      { name: '麻婆豆腐', price: 14 },
      { name: '番茄炒蛋', price: 14 },
      { name: '苦瓜炒蛋', price: 14 },
      { name: '鸡米芽菜', price: 20 },
      { name: '烂肉粉条', price: 20 },
      { name: '家常豆腐', price: 25 },
      { name: '苦瓜烘蛋', price: 16 },
      { name: '宫保鸡丁', price: 20 },
      { name: '干煸茶树菇', price: 25 },
      { name: '泡椒鸡杂', price: 25 },
      { name: '手撕包菜', price: 20 },
      { name: '豇豆茄子', price: 15 },
      { name: '糖醋莲白', price: 12 },
      { name: '莲白粉丝', price: 12 },
      { name: '酸菜鸭血', price: 12 },
      { name: '干煸苦瓜', price: 12 },
      { name: '清炒苦瓜', price: 12 },
      { name: '养胃豆花', price: 15 },
      { name: '炝小白菜', price: 12 },
      { name: '藕丁', price: 15 },
      { name: '藕片', price: 15 },
      { name: '干煸四季豆', price: 14 },
      { name: '青椒土豆丝', price: 12 },
      { name: '酸辣土豆丝', price: 12 },
      { name: '创炒土豆丝', price: 12 },
      { name: '虎皮青椒', price: 12 },
      { name: '青椒玉米', price: 16 },
      { name: '金沙玉米', price: 18 },
      { name: '蟹黄豆花', price: 16 },
      { name: '白油丝瓜', price: 12 },
      { name: '白油三月瓜', price: 12 },
      { name: '白灼凤尾', price: 12 },
      { name: '清炒西南花', price: 12 },
      { name: '炝莲白', price: 12 },
      { name: '炝汉菜', price: 12 },
      { name: '炝空心菜', price: 12 },
      { name: '炝苕尖', price: 12 },
      { name: '土豆烧排骨', price: 38 },
      { name: '笋子烧牛肉', price: 35 },
      { name: '青笋烧鸡', price: 30 },
      { name: '清炖蹄花', price: 30 },
    ],
    logs:[],
    total:0,
    num:0,
    avg:0,
  },
  onLoad: function (o) {
    if (o.idxs != undefined){
      this.setData({num:o.num,avg:o.avg});
        this.loadByIds(o.idxs,o.total);
        return;
    }
    this.loadByRandom(o.max,o.num);
  },
  random:function(size){
    return parseInt(Math.random() * size);
  },
  loadByRandom: function (max, num){ 
    var datas = this.data.list;
    var len = datas.length;
    var times = 0;
    var hasResult = true;
    while (true){
        if(times > len * 10){
            hasResult = false;
            break;
        }
        times++; 
        var temp = [];
        var total = 0;
        for(var i=1;i<num;i++){
          var o = datas[this.random(len)];
          if(temp.indexOf(o) != -1){
              i--;
              continue;
          }
          total += o.price;
          temp.push(o); 
        }
        console.log("total:" + total);
        if (total <= max) {
          break;
        }
    }
    if(!hasResult){
        this.setData({ tips:'我已经尽力了...' });
        return;
    } 
    temp.sort(this.compare);
    this.setData({ logs: temp, total: total, num: num, avg: (total / num).toFixed(2)});
  },
  loadByIds: function (idxs, total){
    console.log("idxs:" + idxs);
    var idArr = idxs.split(",");
    var datas = this.data.list;
    var temp = [];
    idArr.forEach(idx => {
      for (let i in datas) {
        if (i == idx) {
          temp.push(datas[i]);
          break;
        }
      } 
    }); 
    this.setData({ logs: temp, total: total});
  },
  compare:function(val1, val2){
    return val1.price - val2.price;
  },
  goback:function(){
    wx.navigateBack({
      delta:1
    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (e) {
    var path = 'pages/logs/logs';
    var logs = this.data.logs;
    var total = this.data.total;
    var num = this.data.num;
    var avg = this.data.avg;
    if(logs != undefined && logs.length > 0){
      var datas = this.data.list;
      var idxs = "";
      for (let i in logs){
        var idx = datas.indexOf(logs[i]);
        idxs += idx + ",";
        console.log(idxs);
      }
      path += "?total=" + total+ "&num=" + num + "&avg=" + avg + "&idxs=" + idxs;
    }
    console.log("path:" + path);
    return {
      title:'我点好菜了，请查收',
      path: path,
      success: function (res) {
      },
      fail: function (res) {
      }
    }
  },
})

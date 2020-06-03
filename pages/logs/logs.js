//logs.js
const util = require('../../utils/util.js');
const app = getApp();
Page({
  data: {
    tips:'我正在思考....',
    max:0,
    list: [
      { id: 1, name: '醋溜白菜', price: 12 },
      { id: 2, name: '西红柿炒蛋', price: 10 },
      { id: 3, name: '尖椒土豆丝', price: 11 },
      { id: 4, name: '鱼香肉丝', price: 15 },
      { id: 5, name: '水煮肉片', price: 18 },
      { id: 6, name: '清炒空心菜', price: 8 },
      { id: 7, name: '白切鸡', price: 16 },
    ],
    logs:[],
    total:0
  },
  onLoad: function (o) {
    if(o.ids != undefined){
        this.loadByIds(o.ids,o.total);
        return;
    }
    var max = o.max; 
    this.setData({max:max});
    this.loadByRandom();
  },
  random:function(size){
    return parseInt(Math.random() * size);
  },
  loadByRandom:function(){
    var max = this.data.max;
    var datas = this.data.list;
    var len = datas.length;
    var temp = [];
    var total = 0;
    var times = 0;
    var hasResult = true;
    while(total < max){
      if(times > len * 8){
          hasResult = false;
          break;
      }
      times++;
      var o = datas[this.random(len)];
      if(temp.indexOf(o) != -1){
          continue;
      }
      total += o.price;
      temp.push(o);
    }
    if(!hasResult){
        this.setData({ tips:'我已经尽力了...' });
        return;
    } 
    temp.sort(this.compare);
    this.setData({logs:temp,total:total});
  },
  loadByIds: function (ids, total){
    console.log("ids:" + ids);
    var idArr = ids.split(",");
    var datas = this.data.list;
    var temp = [];
    idArr.forEach(id => {
      for (let i in datas) {
        var o = datas[i];
        if (o.id == id) {
          temp.push(o);
          break;
        }
      } 
    }); 
    this.setData({ logs: temp, total: total});
  },
  compare:function(val1, val2){
    return val1.price - val2.price;
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (e) {
    var path = 'pages/logs/logs';
    var logs = this.data.logs;
    var total = this.data.total;
    if(logs != undefined && logs.length > 0){
      var ids = "";
      for (let i in logs){
        ids += logs[i].id + ",";
      }
      path += "?total=" + total+ "&ids=" + ids;
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

//index.js
//获取应用实例
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    userInfo: {},
    ip:null,
    ipInfo:null,
    items: [
      {name: 'USA', value: '美国'},
      {name: 'CHN', value: '中国', checked: 'true'},
      {name: 'BRA', value: '巴西'},
      {name: 'JPN', value: '日本'},
    ]
  },
  // 获取复选框里面的内容
   checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  // 获取获取输入框的值，并命名为ip
  input : function(e){
    // console.log(e)
    this.setData({ip:e.detail.value})
  },

  // 点击按钮请求API获取数据，并把数据赋值到paga.data,传到前端渲染
  btnClick : function(){
    console.log(this.data.ip)
    var thispage = this;
    app.getIpInfo(this.data.ip,function(data){
        console.log(data)
        thispage.setData({ipInfo:data.data})  
    }); 
  },
 
 
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})

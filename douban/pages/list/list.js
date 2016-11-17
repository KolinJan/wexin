// Douban API 操作
const douban = require('../../utils/douban.js')

// 创建一个页面对象用于控制页面的逻辑
Page({
  data:{
    title: '',
    type: 'in_theaters',
    subtitle: '加载中...',
    loading: true,
    movies: []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // options.type： in_theaters  coming_soon  top250
    var that = this
    this.data.type = options.type 
    this.data.title = options.title 
   
    douban.theme(this.data.type,1,50,function(data){   // 小程序对返回数据的大小有限制，返回100条数据时就返回失败，设置了50条
      // console.log(data.subjects)
      that.setData({subtitle: data.title,movies: data.subjects, loading: false })
    })
  },

  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})


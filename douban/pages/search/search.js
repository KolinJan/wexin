// 拿到全局应用程序实例
const app = getApp()
// Douban API 操作
const douban = require('../../utils/douban.js')

// 创建一个页面对象用于控制页面的逻辑
Page({
  data: {
    subtitle: '请在此输入搜索内容',
    movies: [],
    loading: false,
  },

  search (e) {
    if (!e.detail.value) return
    this.setData({ subtitle: '加载中...', loading: true })
     
    var that = this
    this.data.tag = e.detail.value
   
    douban.search(this.data.tag,1,20,function(data){
      //console.log(data.subjects)
      that.setData({subtitle: data.title,movies: data.subjects, loading: false })
    })
  }
})

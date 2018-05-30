//index.js
const app = getApp()
var template = require('../../our-ui/tabbar/template.js');

Page({
  data: {

  },

  onLoad: function () {
    template.tabbar("tabBar", 0, this) // 0表示第一个tabbar

  }
})

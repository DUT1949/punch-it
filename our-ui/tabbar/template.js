
//初始化数据
function tabbarinit() {
 return [
      { "current":0,
        "pagePath": "/pages/index/index",
        "iconPath": "/our-ui/tabbar/images/home.png",
        "selectedIconPath": "/our-ui/tabbar/images/home_on.png",
        "text": "正在进行"
      },
      {
        "current": 0,
        "pagePath": "/pages/explore/explore",
        "iconPath": "/our-ui/tabbar/images/add.png",
        "selectedIconPath": "/our-ui/tabbar/images/add_on.png",
        "text": "探索"

      },
      {
        "current": 0,
        "pagePath": "/pages/myinfo/myinfo",
        "iconPath": "/our-ui/tabbar/images/me.png",
        "selectedIconPath": "/our-ui/tabbar/images/me_on.png",
        "text": "我的"
      }
    ]

}

/**
 * tabbar主入口
 * @param  {String} bindName 
 * @param  {[type]} id       [表示第几个tabbar，以0开始]
 * @param  {[type]} target   [当前对象]
 */
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}


module.exports = {
  tabbar: tabbarmain
}
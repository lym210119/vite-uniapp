import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [],
  globalStyle: {
    backgroundColor: '@bgColor',
    backgroundColorBottom: '@bgColorBottom',
    backgroundColorTop: '@bgColorTop',
    backgroundTextStyle: '@bgTxtStyle',
    navigationBarBackgroundColor: '#000000',
    navigationBarTextStyle: '@navTxtStyle',
    navigationBarTitleText: '锦呼',
    navigationStyle: 'custom',
  },
  // tabBar: {
  //   backgroundColor: "@tabBgColor",
  //   borderStyle: "@tabBorderStyle",
  //   color: "@tabFontColor",
  //   selectedColor: "@tabSelectedColor",
  // },
  tabBar: {
    blurEffect: 'extralight',
    color: '#999999',
    borderStyle: 'black',
    // 注意：启用高斯模糊效果后不建议设置backgroundColor，如果需要设置的需要使用 rgba 设置透明度，不然看不到模糊效果
    // backgroundColor: 'rgba(0,255,51,0.3)',
    spacing: '5px',
    height: '50px',
    selectedColor: '#0062cc',
    list: [
      {
        text: '首页',
        iconPath: 'static/images/tabbar/home2.png',
        selectedIconPath: 'static/images/tabbar/home1.png',
        pagePath: 'pages/home/index',
      },
      {
        text: '客户',
        iconPath: 'static/images/tabbar/customer2.png',
        selectedIconPath: 'static/images/tabbar/customer1.png',
        pagePath: 'pages/customer/index',
      },
      {
        text: '任务',
        iconPath: 'static/images/tabbar/task2.png',
        selectedIconPath: 'static/images/tabbar/task1.png',
        pagePath: 'pages/task/index',
      },
      // {
      //   text: '应用',
      //   iconPath: 'static/images/tabbar/yingyong2.png',
      //   selectedIconPath: 'static/images/tabbar/yingyong1.png',
      //   pagePath: 'pages/application/index',
      // },
      {
        text: '我的',
        iconPath: 'static/images/tabbar/my2.png',
        selectedIconPath: 'static/images/tabbar/my1.png',
        pagePath: 'pages/mine/index',
      },
    ],
  },
  easycom: {
    autoscan: true,
    custom: {
      '^uni-(.*)': '@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue',
    },
  },
})

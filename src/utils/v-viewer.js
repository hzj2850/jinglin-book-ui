/**
 * 参数：https://blog.csdn.net/weixin_44364294/article/details/129010981
 * 预览图片插件
 * 参数：http://t.zoukankan.com/hao-1234-1234-p-11011249.html
 * https://mirari.cc/2017/08/27/Vue%E5%9B%BE%E7%89%87%E6%B5%8F%E8%A7%88%E7%BB%84%E4%BB%B6v-viewer%EF%BC%8C%E6%94%AF%E6%8C%81%E6%97%8B%E8%BD%AC%E3%80%81%E7%BC%A9%E6%94%BE%E3%80%81%E7%BF%BB%E8%BD%AC%E7%AD%89%E6%93%8D%E4%BD%9C/
 */
import Viewer from 'v-viewer';
import 'viewerjs/dist/viewer.css';
const install = Vue => {
  Vue.use(Viewer)
  Viewer.setDefaults({
    backdrop: true, // 是否启用播放模态背景[布尔值/字符串：默认true](不启用时，点击空白处不会退出播放，仅点击右上角关闭按钮才会退出播放)
    inline: false, // 启用inline模式[布尔值：默认false]
    button: true, // 显示右上角关闭按钮[布尔值：默认true]
    navbar: true, // 显示缩略图导航[布尔值/数字：默认true]
    title: true, // 显示当前图片的标题(显示alt属性或从URL解析出的图片名称)[布尔值/数字/方法/数组：默认true]
    toolbar: true, // 显示工具栏、自定义工具栏[布尔值/数字/对象：默认true]
    tooltip: true, // 显示缩放百分比[布尔值：默认true]
    movable: true, // 图片是否可移动[布尔值：默认true]
    zoomable: true, // 图片是否可缩放[布尔值：默认true]
    rotatable: true, // 图片是否可旋转[布尔值：默认true]
    scalable: true, // 图片是否可翻转[布尔值：默认true]
    transition: true, // 使用CSS3过渡[布尔值：默认true]
    fullscreen: true, // 播放时是否全屏[布尔值/全屏配置：默认true]
    keyboard: true, // 是否支持键盘[布尔值：默认true]
    url: 'src', // 播放时图片地址 URL 来源。[字符串/方法：默认src](如果是字符串，则应该是每个图像元素的属性之一。 如果是方法，则应该返回一个有效的图像URL)
    loop: false, // 是否可以循环查看图片，默认true
    loading: true, // 加载图片时是否显示loading图标，默认true
    toggleOnDblclick: true, // 放大或缩小图片时，是否可以双击还原，默认true
    zoomRatio: 0.1, // 鼠标滚动时的缩放比例，默认0.1
    minZoomRatio: 0.01, // 最小缩放比例，默认0.01
    maxZoomRatio: 100, // 最大缩放比例，默认100
    ready() {
      // viewerIn.setAttribute('style', 'border: 1px solid red;')
      // var toolbar = document.querySelector('.viewer-toolbar');
      // const li = document.createElement("li");
      // li.setAttribute('role', 'button');
      // li.setAttribute('class', 'icon-xiazai iconfont');
      // li.setAttribute('style', `display: flex;justify-content: center;align-items: center;font-size: 14px;color: #fff;`);
      // li.onclick = function() {
      //   const img = document.querySelector('.viewer-canvas img');
      //   console.log(img.src)
      // }
      // toolbar && toolbar.querySelector('ul').append(li)
    },
  })
}

export default install;

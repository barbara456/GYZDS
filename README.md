# GYZDS 国乐知多少
## 项目地址：http://175.24.123.164/
## 项目技术栈：原生js，html，css
## 难点：1.解决图片抖动问题
### 原本乐曲点击的播放的实现方式是，有两个乐曲图片，一个是白色字体未播放，一个是黄色字体已播放的图片。点击后让白色图片隐藏，黄色字体出现，问题出在，黄色字体的图片本身有问题，修改了黄色字体的图片后，就没有点击抖动了
## 2.页面切换白屏问题
### 原本的页面切换时会有一瞬间的白屏，而正确的应该是，先让页面上某几个元素逐渐隐藏，然后背景保持不变，（这个时候相当于背景做了一个翻页动画的承接作用）元素隐藏结束后让背景直接切换成下一幕的背景，再让下一幕的背景上的几个元素再逐渐显示，这样就比较不突兀，也不会出现白屏————而不是直接让那个最大的包含当前整个页面的div全部隐藏，然后让下一个页面，也是包含下一个页面的那个最大的div全部显示，这样中间没有承接，所以在透明度变化的时候就会出现白屏的现象

//                                 第一幕       月亮滑动相关变量声明
const fakemoonbutton = document.getElementsByClassName('fakemoonbutton')[0];
const moonbox = document.getElementsByClassName('moonbox')[0];
const moon = document.getElementsByClassName('moon')[0];
const textTips = document.getElementsByClassName('text-tips')[0];
const backgroundMountain = document.getElementsByClassName('bac-mountain')[0];
const first = document.getElementsByClassName('first')[0];


//                                          第一幕      月亮滑动逻辑


var startY = 0;
var middleY = 275;
// 初始化获得盒子原来的位置 
var y = 0;
var lastTop = 0

// 手指触摸 
fakemoonbutton.addEventListener('touchstart', function(e) {
    // 获取手指初始坐标 
    // 当前元素offsetTop是相对于父节点的垂直距离 
    // pageY是touch接口的一个属性：表示触摸的点！！！相对于网页左上角的垂直距离
    startY = e.targetTouches[0].pageY;
    y = this.offsetTop;
    moonbox.style.transition = "none";

});
// 手指按住移动 
fakemoonbutton.addEventListener('touchmove', function(e) {
    // 计算手指的移动距离：手指移动之后的坐标减去手指初始的坐标 
    let moveY = e.targetTouches[0].pageY - startY;
    lastTop = y + moveY;
    // 移动盒子 盒子原来的位置 + 手指移动的距离 
    moonbox.style.top = lastTop + 'px';
    // 阻止屏幕滚动的默认行为 
    e.preventDefault();
});
// 手指离开 
fakemoonbutton.addEventListener('touchend', function(e) {
    // 判断是否过中线
    if (lastTop >= middleY) {
        moonbox.style.top = y + 'px';
        console.log('没过中线嗷，给爷爬回原位');
    } else {
        console.log('过中线了，给爷上天');
        // 过中线后的1秒内，月亮和提示语变透明，接下来执行延迟函数：1s后月亮和提示语元素display：none
        // 这就过了1s了。效果是，月亮和提示语完全从页面消失
        // 这个时候就该出现第二幕
        moonbox.style.top = 0 + 'px';
        moonbox.style.transition = "ease 1s";
        domDisappear(moon);
        domDisappear(textTips);
        // ？？？需要思考！！！
        second.style.display = 'block';

        // 延时执行函数，1秒后让月亮和提示语元素都display：none
        setTimeout(function(e) {
            textTips.style.display = 'none';
            moonbox.style.display = 'none';
            fakemoonbutton.style.display = 'none';
            domAppear(second);
        }, 1000);
    }
    moonbox.style.transition = "ease 3s";
})
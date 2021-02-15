//                                 第一幕       月亮滑动相关变量声明
const fakemoonbutton = document.getElementsByClassName('fakemoonbutton')[0];
const moonbox = document.getElementsByClassName('moonbox')[0];
const moon = document.getElementsByClassName('moon')[0];
const textTips = document.getElementsByClassName('text-tips')[0];
const second = document.getElementById('second');
//                                第二幕         点击播放音乐相关声明
const playMusicImgList = document.querySelectorAll('.play');
const playedMusicImgList = document.querySelectorAll('.played');
const MusicList = document.querySelectorAll('.musiclist');
const tiandengUnit = document.getElementsByClassName('tiandengUnit')[0];
const tiandeng = document.getElementsByClassName('tiandeng')[0];
const tiandenghandmove = document.getElementsByClassName('tiandenghandmove')[0];
var temp = 7;

//                          第三幕              乐器播放相关声明
const yueQiPlayList = document.getElementsByClassName('yueQiPlayList');
const yueqi = document.getElementsByClassName('yueqi');
const yueqistar = document.getElementsByClassName('yueqistar');
const first = document.getElementsByClassName('first')[0];
const third = document.getElementsByClassName('third')[0];

let isCurrentPlay = false;


// // console.log(yueqi);
// console.log(yueqistar);
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
        moonbox.style.transition = "ease 1s"
        moon.style.opacity = 0;
        moon.style.transition = "ease 1s"
        textTips.style.opacity = 0;
        textTips.style.transition = "ease 1s";
        // ？？？需要思考！！！
        second.style.display = 'block';

        // 延时执行函数，1秒后让月亮和提示语元素都display：none
        setTimeout(function(e) {
            textTips.style.display = 'none';
            moonbox.style.display = 'none';
            fakemoonbutton.style.display = 'none';
            // second.style.display = 'block';
            // 规定渐变的动画属性为opacity
            // second.style.transitionProperty = 'opaciy';
            second.style.opacity = 1;
            second.style.transition = "ease 2s";
        }, 1000);
    }
    moonbox.style.transition = "ease 3s";
})

//                                             第二幕          点击乐曲播放逻辑
// 点击播放，进行判断
for (let t = 0; t < playedMusicImgList.length; t++) {
    playMusicImgList[t].addEventListener('touchstart', function(e) {
        // tiandengUnit.style.display = 'block';
        tiandengUnit.style.opacity = 1;
        tiandengUnit.style.transition = "ease 3s";
        if (t !== temp) {
            // 这次点击的下标与上次点击的下标进行判断。
            // 若相同，则再存，走正常流程显示，播放，隐藏
            // 若不同，则证明此时还有一个已经播放的字体，
            // 则需要通过遍历把所有播放暂停，所有黄色字体隐藏，白色字体显示，恢复初始状态
            // 恢复初始状态后，再走正常流程
            for (let p = 0; p < playMusicImgList.length; p++) {
                MusicList[p].pause();
                playMusicImgList[p].style.display = 'block';
                playedMusicImgList[p].style.display = "none";
            }
        }
        temp = t;
        // 存住上一次点击的下标
        MusicList[t].play();
        playMusicImgList[t].style.display = 'none';
        playedMusicImgList[t].style.display = 'block';
        // 这就保证了不管什么时候,页面上只有一个黄色字体正在播放
    })
}
// 白色字体播放后，点击黄色字体暂停播放
for (let i = 0; i < playedMusicImgList.length; i++) {
    playedMusicImgList[i].addEventListener("touchstart", function(e) {
        // for
        playMusicImgList[i].style.display = 'block';
        playedMusicImgList[i].style.display = "none";
        MusicList[i].pause();
    })
}

//                                第二幕     天灯滑动逻辑（点击显示第三幕）
tiandeng.addEventListener('touchend', function(e) {
    this.style.animation = 'tiandengup 1s';
    tiandenghandmove.style.animation = 'none';
    first.style.opacity = '0';
    first.style.transition = "ease 3s";
    third.style.display = 'block';


    // for (let p = 0; p < playMusicImgList.length; p++) {
    //     MusicList[p].pause();
    //     playMusicImgList[p].style.display = 'block';
    //     playedMusicImgList[p].style.display = "none";
    // }

    // setTimeout(function(e) {
    //     third.style.opacity = '1';
    //     third.style.backgroundColor = '#23254E';
    //     third.style.transition = "ease 3s";
    //     // second.style.display = 'block';
    //     // 规定渐变的动画属性为opacity
    //     // second.style.transitionProperty = 'opaciy';

    // }, 2000);


})

//                                             第三幕          点击乐器播放逻辑
// 点击播放，进行判断
for (let t = 0; t < yueqi.length; t++) {
    yueqi[t].addEventListener('touchstart', function(e) {
        console.log(temp);
        if (t !== temp) {
            console.log('点击非当前乐器');
            // 这次点击的下标与上次点击的下标进行判断。
            // 若相同，则再存，走正常流程显示，播放，改透明度
            // 若不同，则证明此时还有一个已经播放的乐器，
            // 则需要通过遍历把所有播放暂停，所有透明度改为0。5，恢复初始状态
            // 恢复初始状态后，再走正常流程
            for (let p = 0; p < yueqi.length; p++) {
                yueQiPlayList[p].pause();
                yueqistar[p].style.opacity = '0.5';
            }
            yueQiPlayList[t].play();
            yueqistar[t].style.opacity = '1';
            isCurrentPlay = false;
            // 如果第二次点击和上次点击的下标一样，即t==temp，那么意味着用户再次点击了，则暂停播放，透明度为0.5
        } else {
            console.log('点击当前乐器');
            console.log(t);
            isCurrentPlay = !isCurrentPlay;
            console.log(isCurrentPlay)
            if (isCurrentPlay) {
                yueQiPlayList[t].play();
                yueqistar[t].style.opacity = '1';
            } else {
                yueQiPlayList[t].pause();
                yueqistar[t].style.opacity = '0.5';
            }
        }
        temp = t;
        console.log(t);
        // 存住上一次点击的下标
        // 这就保证了不管什么时候,页面上只有一个乐器正在播放
    })
}


// for (let i = 0; i < yueqi.length; i++) {

//     yueqi[i].addEventListener('touchstart', function(e) {

//         for (let p = 0; p < yueqi.length; p++) {
//             yueQiPlayList[p].pause();
//             yueqistar[p].style.opacity = '0.5';
//         }

//         yueQiPlayList[i].play();
//         yueqistar[i].style.opacity = '1';

//     })

// }
//                          第三幕              乐器播放相关声明
const yueQiPlayList = document.getElementsByClassName('yueQiPlayList');
const yueqi = document.getElementsByClassName('yueqi');
const yueqistar = document.getElementsByClassName('yueqistar');
const first = document.getElementsByClassName('first')[0];
const third = document.getElementsByClassName('third')[0];

//    点击乐器播放逻辑
// 当前乐曲的播放状态
var isCurrentPlay = false;
var lastInstrument = 7;


// 乐曲播放，透明度为1的函数函数
const instrumentPlay = (i) => {
    yueQiPlayList[i].play();
    yueqistar[i].style.opacity = '1';
    isCurrentPlay = true;
    console.log('当前播放为' + i);
    // 记录本次播放的下标
    lastInstrument = i;
}


// 重置所有乐器状态的函数
const resetAllInstrument = () => {
    for (let p = 0; p < yueqi.length; p++) {
        yueQiPlayList[p].pause();
        yueqistar[p].style.opacity = '0.5';
    }
    isCurrentPlay = false;
}

// 第三幕点击显示星星进入下一页
const polarisHand = document.getElementsByClassName('polarishand')[0];

const clickInstrumentShowStar = () => {
    polarisHand.style.display = 'block';
    polarisHand.style.animation = 'polarisHand 3s alternate';
}

// 点击乐器，播放

// 通过循环给每个乐器绑定点击事件
for (let i = 0; i < yueqi.length; i++) {
    yueqi[i].addEventListener('touchstart', function(e) {
        // 点击显示北极星
        clickInstrumentShowStar();
        // 如果当前没有乐器播放
        if (isCurrentPlay == false) {
            // 那么播放所点击乐器
            instrumentPlay(i);
            return;
        } else {
            // 如果有乐器播放,那么先重置所有乐器
            resetAllInstrument();
            if (lastInstrument !== i) {
                // 若不是相同点击，那意味着用户想要播放其他乐器
                // 那么播放其他乐器
                instrumentPlay(i);
                return;
            } else {
                resetAllInstrument();
            }
            // 若是相同点击，那么已经全部重置过了，实现暂停
        }
    })
}

// 点击北极星，进入下一页
const polaris = document.getElementsByClassName('polaris')[0];
const fourth = document.getElementsByClassName('fourth')[0];

polaris.addEventListener('touchstart', function(e) {
    clickToNextPage(third, fourth);
})
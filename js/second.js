//                                第二幕         点击播放音乐相关声明
const playMusicImgList = document.querySelectorAll('.play');
const playedMusicImgList = document.querySelectorAll('.played');
const MusicList = document.querySelectorAll('.musiclist');
const tiandengUnit = document.getElementsByClassName('tiandengUnit')[0];
const tiandeng = document.getElementsByClassName('tiandeng')[0];
const tiandenghandmove = document.getElementsByClassName('tiandenghandmove')[0];
const second = document.getElementsByClassName('second')[0];
const yindao = document.getElementsByClassName('yindao')[0];


var temp = 7;

// 播放对应乐曲，并修改对应样式，且存住本次点击的下标
const yuequPlay = (i) => {
    MusicList[i].play();
    playMusicImgList[i].style.display = 'none';
    playedMusicImgList[i].style.display = 'block';
    // 存住上一次点击的下标
    temp = i;
}

// 重置所有乐曲状态，全部恢复为点击前,即全部暂停，全部为白色
const resetAllYuequ = () => {
        for (let p = 0; p < playMusicImgList.length; p++) {
            MusicList[p].pause();
            playMusicImgList[p].style.display = 'block';
            playedMusicImgList[p].style.display = "none";
        }
    }
    //                                             第二幕          点击乐曲播放逻辑
    // 点击播放，进行判断
for (let i = 0; i < playedMusicImgList.length; i++) {
    playMusicImgList[i].addEventListener('touchstart', function(e) {
            // 点击后天灯显示动画
            tiandengUnit.style.opacity = 1;
            tiandengUnit.style.transition = "ease 3s";

            if (i !== temp) {
                // 这次点击与上次点击判断，若不同则重置所有乐曲
                resetAllYuequ();

            }
            // 若相同，则再存，走正常流程显示，播放，隐藏
            yuequPlay(i);
        })
        // 这就保证了不管什么时候,页面上只有一个黄色字体正在播放
}
// 白色字体播放后，点击黄色字体暂停播放
for (let i = 0; i < playedMusicImgList.length; i++) {
    playedMusicImgList[i].addEventListener("touchstart", function(e) {
        playMusicImgList[i].style.display = 'block';
        playedMusicImgList[i].style.display = "none";
        MusicList[i].pause();
    })
}

//                                第二幕     天灯滑动逻辑（点击显示第三幕）
tiandeng.addEventListener('touchend', function(e) {
    // 为防止用户操作过快，切换到第三幕，离开第二幕的时候，要结束第二幕的所有播放，则重置第二幕所有乐曲
    // resetAllYuequ();
    tiandeng.style.animation = 'tiandengup 1s';
    tiandenghandmove.style.animation = 'none';
    // 下方背景小山+第二幕的引导语+乐器+天灯模组      2s内全部逐渐消失
    domDisappear(backgroundMountain);
    domDisappear(yindao);
    domDisappear(tiandengUnit);
    // 为了防止用户快速操作的时候，出现进入下一页面后，上一页面的音乐还在播放的情况，进入下一页面时，遍历暂停所有音乐
    for (let p = 0; p < MusicList.length; p++) {
        MusicList[p].pause();
    };
    // 因为乐器取dom的时候是一个数组，所以通过遍历来让他们都隐藏
    for (let i = 0; i < playedMusicImgList.length; i++) {
        domDisappear(playedMusicImgList[i]);
        domDisappear(playMusicImgList[i]);
    }

    setTimeout(
        function(e) {
            first.style.display = 'none';
            second.style.display = 'none';
            third.style.display = 'block';
            for (let i = 0; i < yueqi.length; i++) {
                domAppear(yueqi[i]);
            }
        }, 3000);

    // third.style.display = 'block';
    // third.style.animation = 'secondClickToThird 3s'
})
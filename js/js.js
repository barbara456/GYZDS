        const fakemoonbutton = document.getElementsByClassName('fakemoonbutton')[0];
        const moonbox = document.getElementsByClassName('moonbox')[0];
        const moon = document.getElementsByClassName('moon')[0];
        const textTips = document.getElementsByClassName('text-tips')[0];
        const second = document.getElementById('second');

        const zhuang = document.getElementById('zhaung');
        const zhuangp = document.getElementById('zhaungp');

        // console.log(second.style.display);
        // console.log(textTips);
        // 获得盒子最大移动位置
        // const maxTop = first.offsetHeight - fakemoonbutton.offsetHeight;

        // 获取手指初始坐标 
        var startY = 0;
        var middleY = 275;
        
        // 初始化获得盒子原来的位置 
        var y = 0;

        // console.log(movedY);
        var lastTop = 0

        // 手指触摸 
        fakemoonbutton.addEventListener('touchstart', function(e) {
            // 获取手指初始坐标 
            // 当前元素offsetTop是相对于父节点的垂直距离 
            // pageY是touch接口的一个属性：表示触摸的点！！！相对于网页左上角的垂直距离

            startY = e.targetTouches[0].pageY;
            y = this.offsetTop;
            this.style.transition = "none";
           
        });
        // 手指按住移动 
        fakemoonbutton.addEventListener('touchmove', function(e) {

            // 计算手指的移动距离：手指移动之后的坐标减去手指初始的坐标 
            let moveY = e.targetTouches[0].pageY - startY;
            lastTop = y + moveY;

            // 移动盒子 盒子原来的位置 + 手指移动的距离 
            moonbox.style.top = lastTop + 'px';

            // 输出盒子所在高度
            // console.log(lastTop);
            // 阻止屏幕滚动的默认行为 
            e.preventDefault();
        });

        // 手指离开 
        fakemoonbutton.addEventListener('touchend', function(e) {
            // this.style.boxShadow = '';
            if (lastTop >= middleY) {
            moonbox.style.top = y + 'px';
            moonbox.style.transition="ease 3s"
            console.log('没过中线嗷，给爷爬');
            }else{
            moonbox.style.top = 0 + 'px'; 
            moonbox.style.transition="ease 3s"
            moon.style.opacity = 0;
            moon.style.transition="ease 3s"
            console.log('给爷上天');
            textTips.style.display = 'none';
            textTips.style.transition = "ease 2s";
            second.style.display = 'block';
            second.style.transition = "2s";
            }
            
        });

        zhaung.addEventListener('click',function(e){
        this.style.display = 'none';
        zhaungp.style.display = 'block';
    })
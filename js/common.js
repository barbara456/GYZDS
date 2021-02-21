const clickToNextPage = (a, b) => {
    // 点击，当前页面a逐渐透明，1s后消失，逐渐显示下一页面b，2s内显示完成的函数
    // 使用说明，a页面的display需为block，b页面的display需为none，opacity需为0
    a.style.opacity = '0';
    a.style.transition = 'opacity 3s'
    b.style.display = 'block';
    setTimeout(
        function(e) {
            a.style.display = 'none';
            b.style.opacity = '1';
            b.style.transition = 'ease-out 2s';
        }, 1000);
}
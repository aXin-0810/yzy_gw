/*设置自适应布局*/
(function(doc, win) {
    var docEl = doc.documentElement,
        isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
        dpr = window.top === window.self ? dpr : 1, //被iframe引用时，禁止缩放
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    if (doc.documentElement.dataset) {
        docEl.dataset.dpr = dpr;
        var recalc = function() {
            var width = docEl.clientWidth;
            if (docEl.clientWidth > 1366) {
                docEl.style.fontSize = 8 * (docEl.clientWidth / 480) + 'px';
            } else if (docEl.clientWidth < 650) {
                docEl.dataset.width = width;
                docEl.dataset.percent = 100 * (width / 750);
                docEl.style.fontSize = 100 * (width / 750) + 'px';
            } else {
                docEl.style.fontSize = "22px";
            }
        };
        recalc();
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
    } else {
        var width = docEl.clientWidth;
        if (docEl.clientWidth > 1366) {
            docEl.style.fontSize = 8 * (docEl.clientWidth / 480) + 'px';
        } else if (docEl.clientWidth < 650) {
            doc.documentElement.setAttribute('dpr', dpr);
            doc.documentElement.setAttribute('data-width', width);
            doc.documentElement.setAttribute('data-percent', 100 * (width / 750));
            doc.documentElement.style.fontSize = 100 * (width / 750) + 'px';
        } else {
            docEl.style.fontSize = "22px";
        }

    }
})(document, window);
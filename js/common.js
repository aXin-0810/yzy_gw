function commonHtml(insert){
    var html_ = `
        <!-- 手机网页端头部 -->
        <div class="mobile-nav">
            <span class="nav-btn"></span>
            <a href="#">
                <img class="nav-logo" src="./images/logo.png" border="0">
            </a>
        </div>
        <!-- 遮罩 -->
        <div class="aside-cover"></div>
        <div class="aside">
            <h1 class="logo">一智源</h1>
            <ul class="navi">
                <li>
                    <a class="icon home" href="./index.html#homeTop" title="首页">首页</a>
                </li>
                <li>
                    <a class="icon park" href="./index.html#product"  title="产品展示">产品展示</a>
                </li>
                <li>
                    <a class="icon news" href="./index.html#factory"  title="设备展示">设备展示</a>
                </li>
                <li>
                    <a class="icon mouse no-url" title="加工能力">加工能力</a>
                </li>
                <li>
                    <a class="icon my no-url" title="关于我们">关于我们</a>
                </li>
            </ul>
        </div>
        <div class="left-nav-box">
            <div class="left-nav">
                <h2 class="mouse">加工能力</h2>
                <ul>
                    <li><a href="./sbzsPage.html">主要设备清单</a></li>
                    <li><a href="./scnlPage.html">工艺能力</a></li>
                </ul>
            </div>
            <div class="left-nav">
                <h2 class="my">我们</h2>
                <ul>
                    <li><a href="./about.html">公司介绍</a></li>
                    <li><a href="./companyStructure.html">公司架构</a></li>
                    <li><a href="./processFlow.html">工艺流程</a></li>
                    <li><a href="./contactUs.html">联系方式</a></li>
                </ul>
            </div>
        </div>
    `;
    return html_;
}
var home_url = 'https://arknightscommunity.drblack-system.com/author/597';
if (window.location.href == home_url && title_index == null) {
    var title_index = 0;
    loadLive2D();
    setTitle();
    cursorEffect();
    mark_lv();
    follow();
    member_box();
    info_box();
    tab_bar();
    document.querySelector("body > div.jinsom-member-main > div").style = 'background-image: url("https://cdn.jsdelivr.net/gh/FuyumiM/Angelina@latest/Title_Angelina.jpg"); transform: none;';
    console.log("Backup Load");
} else if (window.location.href.substr(0, home_url.length + 1) == home_url + '#' && title_index == null) {
    var title_index = 0;
    setTitle();
    mark_lv_mobile();
    follow_mobile();
    member_box_mobile();
    document.querySelector("#jinsom-member-other-page").style = 'background-image:url("https://cdn.jsdelivr.net/gh/FuyumiM/Angelina@latest/Title_Angelina_Mobile.jpg");';
    console.log("Backup Load Mobile");
}




function info_box() {
    var t = document.querySelector("body > div.jinsom-member-main > div > div > div.jinsom-member-content-list.clear > div.jinsom-member-left > div > div.box.jinsom-member-left-profile > li.id");
    t.textContent = "【代号】安洁莉娜";
    t = document.querySelector("body > div.jinsom-member-main > div > div > div.jinsom-member-content-list.clear > div.jinsom-member-left > div > div.box.jinsom-member-left-profile > li.nickname");
    t.textContent = "【生日】5月14日";
    t = document.querySelector("body > div.jinsom-member-main > div > div > div.jinsom-member-content-list.clear > div.jinsom-member-left > div > div.box.jinsom-member-left-profile > li.gender");
    t.textContent = "【种族】沃尔珀";
    t = document.querySelector("body > div.jinsom-member-main > div > div > div.jinsom-member-content-list.clear > div.jinsom-member-left > div > div.box.jinsom-member-left-profile > li:nth-child(5)");
    t.textContent = "【履历】安洁莉娜，本名安心院安洁莉娜。于叙拉古从事情报递送、货物运输等公开活动，推测身份：信使。现作为实习术师干员，为罗德岛提供后勤保障、战场辅助与战术协同等服务。";
}

function member_box() {
    var t = document.querySelector("body > div.jinsom-member-main > div > div > div.jinsom-member-content-list.clear > div.jinsom-member-left > div > div.box.jinsom-member-left-follow.clear > li:nth-child(1)");
    t.children[0].textContent = "单推安洁莉娜";
    t = document.querySelector("body > div.jinsom-member-main > div > div > div.jinsom-member-content-list.clear > div.jinsom-member-left > div > div.box.jinsom-member-left-follow.clear > li:nth-child(2)");
    t.children[0].textContent = "可怜没有粉丝";
    t = document.querySelector("body > div.jinsom-member-main > div > div > div.jinsom-member-content-list.clear > div.jinsom-member-left > div > div.box.jinsom-member-left-follow.clear > li:nth-child(3)");
    t.children[0].textContent = "人气不存在的";
    t = document.querySelector("body > div.jinsom-member-main > div > div > div.jinsom-member-content-list.clear > div.jinsom-member-left > div > div.box.jinsom-member-left-follow.clear > li:nth-child(4)");
    t.children[0].textContent = "魅力也不可能";
}

function member_box_mobile() {
    var t = document.querySelector("#jinsom-member-other-page > div.jinsom-member-header > div.info > div:nth-child(1) > a");
    t.children[0].textContent = "单推安洁莉娜";
    t = document.querySelector("#jinsom-member-other-page > div.jinsom-member-header > div.info > div:nth-child(2) > a");
    t.children[0].textContent = "可怜没有粉丝";
    t = document.querySelector("#jinsom-member-other-page > div.jinsom-member-header > div.info > div:nth-child(3)");
    t.children[0].textContent = "人气不存在的";
    t = document.querySelector("#jinsom-member-other-page > div.jinsom-member-header > div.info > div:nth-child(4)");
    t.children[0].textContent = "魅力也不可能";
}

function tab_bar() {
    var t = document.querySelector("body > div.jinsom-header > div > div.logo > a");
    t.style = "background-image: url(https://ark-dev-1256540909.cos.ap-shanghai.myqcloud.com/user_files/597/publish/words/6591271_1623929871.jpg);";
}

function follow() {
    var t = document.querySelector("body > div.jinsom-member-main > div > div > div.jinsom-member-header > div.jinsom-member-follow-info > span.follow.no.opacity");
    if (t != null) {
        t.textContent = "亲，不想关注这个可爱的Fuyumi吗？~";
        t.style.visibility = (t.style.visibility == "visible") ? "hidden" : "visible";
    }
    t = document.querySelector("body > div.jinsom-member-main > div > div > div.jinsom-member-header > div.jinsom-member-follow-info > span.follow.had.opacity");
    if (t != null) {
        t.style.visibility = "visible";
        t.onclick = function () { };
    }
    setTimeout('follow()', 500);
}

function follow_mobile() {
    var t = document.querySelector("#jinsom-view-sns-0 > div.pages.navbar-through > div.page.no-tabbar.page-on-center > div.toolbar.toolbar-bottom.jinsom-member-other-toolbar > div > div.jinsom-follow-597.follow.no");
    if (t != null) {
        t.textContent = "点个关注吧~";
        t.style.backgroundColor = '#ed1941';
        t.style.color = '#ffffff';
        t.style.visibility = (t.style.visibility == "visible") ? "hidden" : "visible";
    }
    t = document.querySelector("#jinsom-view-sns-0 > div.pages.navbar-through > div.page.no-tabbar.page-on-center > div.toolbar.toolbar-bottom.jinsom-member-other-toolbar > div > div.jinsom-follow-597.follow.no.had");
    if (t != null) {
        t.textContent = "不可以取关哦~";
        t.style.backgroundColor = '#000000';
        t.style.color = '#ffffff';
        t.style.visibility = "visible";
        t.onclick = function () { };
    }
    setTimeout('follow_mobile()', 500);
}

function mark_lv() {
    var t = document.querySelector("body > div.jinsom-member-main > div > div > div.jinsom-member-header > div.jinsom-member-username > span.jinsom-mark.jinsom-lv");
    if (t != null) {
        t.title = "经验值：是多少呢~这是个~秘~密~";
        t.textContent = "❤❤安洁莉娜单推人❤❤";
        t.style = "background:#8f4b2e;";
    }
}

function mark_lv_mobile() {
    var t = document.querySelector("#jinsom-member-other-page > div.jinsom-member-header > div.name > span.jinsom-mark.jinsom-lv");
    if (t != null) {
        t.title = "经验值：是多少呢~这是个~秘~密~";
        t.textContent = "❤❤安洁莉娜单推人❤❤";
        t.style = "background:#8f4b2e;";
    }
}

function cursorEffect() {
    !function (e, t, a) { function r() { for (var e = 0; e < s.length; e++) { s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += 0.004, s[e].alpha -= 0.013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999") } requestAnimationFrame(r) } function n() { var t = "function" == typeof e.onclick && e.onclick; e.onclick = function (e) { if (e.path[0].getAttribute("noshow") != 'true') t && t(), o(e) } } function o(e) { var a = t.createElement("div"); a.className = "heart", s.push({ el: a, x: e.clientX - 5, y: e.clientY - 5, scale: 1, alpha: 1, color: c() }), t.body.appendChild(a) } function i(e) { var a = t.createElement("style"); a.type = "text/css"; try { a.appendChild(t.createTextNode(e)) } catch (t) { a.styleSheet.cssText = e } t.getElementsByTagName("head")[0].appendChild(a) } function c() { return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")" } var s = []; e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) { setTimeout(e, 1000 / 60) }, i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), n(), r() }(window, document);
}

function loadLive2D() {
    var secScript = parent.document.createElement('script');
    secScript.setAttribute('type', 'text/javascript');
    secScript.setAttribute('src', 'https://cdn.jsdelivr.net/gh/FuyumiM/live2d-widget@latest/autoload.js');
    parent.document.body.insertBefore(secScript, document.body.lastChild);
}

function setTitle() {
    var title_text = ['斯哈斯哈，安洁莉娜！', '安洁莉娜小姐是我们的光！', '没有人可以拒绝JK！', '欢迎来到Fuyumi的主页'];
    document.title = title_text[title_index];
    title_index++;
    title_index = title_index % title_text.length;
    setTimeout("setTitle()", 1000);
}
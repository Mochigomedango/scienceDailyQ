var link = document.createElement('link');
link.rel = 'shortcut icon';
link.href = '../favicon3.ico';
link.type =  'image/x-icon';
document.getElementsByTagName('head')[0].appendChild(link);
window.onload = function(){
    var w = Math.max(document.documentElement.clientWidth,document.body.scrollWidth);
    var h = Math.max(document.documentElement.clientHeight,document.body.scrollHeight);
    xs = false;
    c = document.getElementById('con');
    c.style.width = (w-250)+'px';
}


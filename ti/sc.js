var bodyBgs = [];
bodyBgs[0] = "../images/01.jpg";
bodyBgs[1] = "../images/02.jpg";
var randomBgIndex = Math.round( Math.random() * 1 );
document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] + ') ;background-size: 100%}</style>');
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



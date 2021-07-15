var body = document.getElementsByTagName('body')[0];

function fadeOut() {
    body.classList.add('bodyfadeout');
}

function linkUrl() {
    location.href = 'home.html'
}
var bt4 = document.getElementById('button');
var posi = bt4.getBoundingClientRect();

bt4.addEventListener('click', function () {
    bt4.style.position = 'absolute';
    bt4.style.top = posi.top + 'px';
    bt4.style.left = posi.left + 'px';
    bt4.classList.add('anime4');
    setTimeout(fadeOut, 2000);
    setTimeout(linkUrl, 3500);
});
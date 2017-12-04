window.onload = function(){
var element = document.getElementsByClassName("container")[0];
var height = element.offsetHeight;
if (height < screen.height) {
    document.getElementsByTagName("footer")[0].classList.add('sticktobottom');
}
}

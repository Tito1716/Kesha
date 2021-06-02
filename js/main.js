$(document).ready(function(){
    $('.collapsible').collapsible();
    $(".venobox").venobox({
        framewidth : '400px',
        frameheight: '300px',
    }); 
});
var glideMulti = new Glide(".multi", {
    type: 'slider',
    autoplay: 4000,
    focusAt: 'center',
    perView: 2
  });
  glideMulti.mount();
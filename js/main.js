window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-to-top").style.display = "block";
    $('.header').css({'position':'fixed', 'opacity': 1, 'z-index': 999});
  } else {
    document.getElementById("scroll-to-top").style.display = "none";
    if(document.body.clientWidth > 767) {
        $('.header').css({'position':'unset', 'opacity': 0.32, 'z-index': 999});
    }
  }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

function showHideMenu() {
    $('.menu').toggle();
}
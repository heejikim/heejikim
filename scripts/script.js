
const setupScrollProgress = function() {
  const bar = $('#progress-bar');
  if(!bar) return;

  $(window).scroll(updateScrollBar);
}

const updateScrollBar = function(){
  const currentScroll = $(this).scrollTop();
  const totalScroll = $(document).height() - $(this).height();
  const scrollPercentage = currentScroll/totalScroll;
  $('#progress-bar').css({transform:`translate3d(0px, 0px, 0px) scale3d(${scrollPercentage}, 1, 1)`})
}

const init = function() {
  updateScrollBar();
  setupScrollProgress();
  //Assigning smoothscroll to anchor tags.
  $('a').smoothScroll({
    offset: 0,
  });
}


// $(function() {
$(document).ready(function(){
  init();
});
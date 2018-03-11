


 $('img').each(function () {  
  const originalWidth = $(this).width();
  const originalHeight= $(this).height();
  function onHoverEnter() {$(this).css({width: '400px', height: '400px'}) }
  function onHoverExit() {$(this).css({width:`${originalWidth}px`, height: `${originalHeight}px`})}
                        
  $(this).hover(onHoverEnter, onHoverExit);
 })





      
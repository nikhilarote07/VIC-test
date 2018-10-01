var View = function() {
  var globalObj = {
    flag: false,
    arrowFlag: false
  };
  this.init = function() {
    bindEvents();
  }

  function bindEvents() {
    $('.shapeImage').off("click", shapeEvents).on("click", shapeEvents);
    $('.halfCircle').off("click", halfCircleEvents).on("click", halfCircleEvents);
  }

  function shapeEvents(e) {
       if(globalObj['flag'] == false) {
         globalObj['flag'] = true;
         $(this).attr({
           "src": "images/shape_over.png"
         })
         $('.ka').css('color', '#FFFFFF');
         $('.kamailio, .resource-kamailio').css('color', 'rgb(77, 104, 183)');
       } else {
         globalObj['flag'] = false;
         $(this).attr({
           "src": "images/shape_normal.png"
         })
         $('.ka').css('color', '#000000');
         $('.kamailio, .resource-kamailio').css('color', '#000000');
       }
  }
  function halfCircleEvents(e) {
      if(globalObj['arrowFlag'] == false) {
        globalObj['arrowFlag'] = true;
        $('.halfCircle').find('.triangle').removeClass('triangleDown').addClass('triangleUp');
        $('.silderPanel').css('visibility', 'visible');
        hideLoader();
      } else {
        globalObj['arrowFlag'] = false;
        $('.halfCircle').find('.triangle').removeClass('triangleUp').addClass('triangleDown');
        $('.silderPanel').css('visibility', 'hidden');
      }
  }
  function hideLoader() {
    setTimeout(function() {
        $('#innderDiv').hide();
        $('.propertComponent').show();
    },1500)
  }
}

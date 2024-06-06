(function() {

    let spot = document.querySelector('.spot');
    let spotBox = spot.offsetWidth;
  
    document.body.addEventListener('mousemove',function(e){
        spot.style.left = e.pageX - spotBox+'px';
        spot.style.top = e.pageY - spotBox+'px';
    });
  
  })();
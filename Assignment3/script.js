(function() {

    let spot = document.querySelector('.spot');
    let spotWHalf = spot.offsetWidth / 2;
  
    document.body.addEventListener('mousemove',function(e){
        spot.style.left = e.pageX - spotWHalf+'px';
        spot.style.top = e.pageY - spotWHalf+'px';
    });
  
  })();
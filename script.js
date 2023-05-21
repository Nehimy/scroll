let i =100;

window.onscroll = function() {

  var y = window.scrollY;
  document.querySelector('.example').innerHTML=y;
  document.querySelector('.example').style.backgroundColor="black";
  /* y=y%10;
   * console.log(y);

   * y=y*10;
   * console.log(y); */


  if (y >= 100)
    document.body.style.backgroundColor = "#5f0b2b";
  if (y >= 200)
    document.body.style.backgroundColor = "#d11638";
  if (y>= 300)
    document.body.style.backgroundColor = "#f08801";
  if (y>= 400)
    document.body.style.background= "#face00";
  if (y>= 500)
    document.body.style.background= "#ada20b";
  if (y>= 600)
    document.body.style.backgroundColor = "#5f0b2b";
  if ( y>= 700)
    document.body.style.backgroundColor = "#d11638";
  if ( y>= 800)
    document.body.style.backgroundColor = "#f08801";
  if ( y>= 900)
    document.body.style.background= "#face00";
  if (y>= 1000)
    document.body.style.background= "#ada20b";

  if (y >= 1100)
    document.body.style.backgroundColor = "#5f0b2b";
  if (y >= 1200)
    document.body.style.backgroundColor = "#d11638";
  if (y>= 1300)
    document.body.style.backgroundColor = "#f08801";
  if (y>= 1400)
    document.body.style.background= "#face00";
  if (y>= 1500)
    document.body.style.background= "#ada20b";
  if (y>= 1600)
    document.body.style.backgroundColor = "#5f0b2b";
  if ( y>= 1700)
    document.body.style.backgroundColor = "#d11638";
  if ( y>= 1800)
    document.body.style.backgroundColor = "#f08801";
  if ( y>= 1900)
    document.body.style.background= "#face00";

};

let i =100;

window.onscroll = function() {

  var y = window.scrollY;
  document.querySelector('.example').innerHTML=y;
  document.querySelector('.example').style.backgroundColor="black";

  if (y >= 100)
    document.body.style.background= "linear-gradient(10deg, rgba(212,17,15,1) 70%, rgba(247,193,0,1) 100%)";
  if (y >= 200)
    document.body.style.background= "linear-gradient(10deg, rgb(138, 1, 0) 70%, rgb(253, 207, 45) 100%)";
  if (y>= 300)
    document.body.style.background = "linear-gradient(0deg, rgb(138, 1, 0) 70%, rgb(253, 113, 45) 100%)";
  if (y>= 400)
    document.body.style.background= "linear-gradient(0deg, rgb(0, 0, 0) 35%, rgb(255, 9, 9) 100%)";
  if (y>= 600)
  document.body.style.background="radial-gradient(circle farthest-corner at 100% 0, #f09c33 0%, #f59234 4%, #f98736 7%, #fd7b38 10%, #ff6e3c 14%, #ff5f41 18%, #ff4e46 21%, #ff384b 25%, #fd1851 29%, #f90059 32%, #f50062 36%, #f0006c 39%, #e90077 43%, #e10083 46%, #d70090 50%, #4e42d4 75%, #4e42d4 100%)";
  if (y>= 1000)
    document.body.style.background = "linear-gradient(0deg, rgb(0, 6, 74) 4%, rgb(0, 135, 255) 100%)";
  if ( y>= 1500)
    document.body.style.background = "linear-gradient(0deg, rgb(0, 0, 0) 10%, rgb(0, 56, 242) 100%)";
  if ( y>= 1900)
    document.body.style.background = "linear-gradient(0deg, rgb(0, 2, 4) 5%, rgb(87, 108, 179) 100%)";

};

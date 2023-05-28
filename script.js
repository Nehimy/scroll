let i =100;

window.onscroll = function() {

  var y = window.scrollY;
  // document.querySelector('.example').innerHTML=y;
  // document.querySelector('.example').style.backgroundColor="black";

  if (y >= 100)
    /* document.body.style.background= "linear-gradient(10deg, rgba(212,17,15,1) 70%, rgba(247,193,0,1) 100%)"; */
    document.body.style.background= "radial-gradient(circle at 0% 40%, rgb(255, 135, 0) 0px, rgb(255, 113, 0) 12.5%, rgb(255, 89, 0) 25%, rgb(255, 58, 0) 37.5%, rgb(255, 2, 2) 50%, rgb(239, 0, 23) 62.5%, rgb(223, 0, 34) 75%, rgb(209, 0, 42) 87.5%, rgb(196, 0, 49) 100%)";
  if (y >= 200)
    /* document.body.style.background= "radial-gradient(circle at 100% 0px, rgb(138, 1, 0) 70%, rgb(253, 207, 45) 100%)"; */
    document.body.style.background= "radial-gradient(circle at 3% 50%, rgb(0, 0, 0) 0px, rgb(26, 9, 0) 16.67%, rgb(68, 0, 0) 33.33%, rgb(113, 7, 7) 50%, rgb(163, 0, 0) 66.67%, rgb(154, 0, 0) 83.33%, rgb(146, 0, 0) 100%)";
  if (y>= 300)
    /* document.body.style.background = "linear-gradient(0deg, rgb(138, 1, 0) 70%, rgb(253, 113, 45) 100%)"; */
    /* document.body.style.background= "linear-gradient(0deg, rgb(0, 0, 0) 35%, rgb(255, 9, 9) 100%)"; */
    /* document.body.style.background= "linear-gradient(15deg, rgb(4, 0, 0) 30%, rgb(255, 15, 15) 100%)"; */
    document.body.style.background = "linear-gradient(195deg, #8b48ae 0, #733bab 16.67%, #552fa8 33.33%, #2525a5 50%, #001ea2 66.67%, #001b9f 83.33%, #001b9d 100%)";

  if (y>= 400)
    /* document.body.style.background= "linear-gradient(0deg, rgb(0, 0, 0) 35%, rgb(255, 9, 9) 100%)"; */
    document.body.style.background= "linear-gradient(195deg, #9018c7 0, #570ba4 25%, #0c007b 50%, #000052 75%, #000030 100%)";
  /* if (y>= 600)
   *     document.body.style.background= "radial-gradient(circle farthest-corner at 100% 0, #f09c33 0%, #f59234 4%, #f98736 7%, #fd7b38 10%, #ff6e3c 14%, #ff5f41 18%, #ff4e46 21%, #ff384b 25%, #fd1851 29%, #f90059 32%, #f50062 36%, #f0006c 39%, #e90077 43%, #e10083 46%, #d70090 50%, #4e42d4 75%, #4e42d4 100%)"; */
  if (y>= 1000)
    document.body.style.background = "linear-gradient(10deg, rgb(0, 6, 74) 40%, rgb(0, 135, 255) 100%)";
  if ( y>= 1500)
    document.body.style.background = "linear-gradient(0deg, rgb(0, 0, 0) 10%, rgb(0, 56, 242) 100%)";
  if ( y>= 1900)
    document.body.style.background = "linear-gradient(0deg, rgb(0, 2, 4) 5%, rgb(87, 108, 179) 100%)";

};

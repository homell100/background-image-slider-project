  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

  var pos = 0;
  var leftBtn = document.querySelector(".btn-left");
  var rightBtn = document.querySelector(".btn-right");
  var imgContainer = document.querySelector(".img-container");

  leftBtn.onclick = slideToLeft;
  rightBtn.onclick = slideToRight;

  function slideToLeft(){
    newURL = "url('img/" + pictures[(--pos)%pictures.length] + ".jpeg')";
    imgContainer.style.backgroundImage =  newURL;
    // alert("Hello");
  }

  function slideToRight(){
    newURL = "url('img/" + pictures[(++pos)%pictures.length] + ".jpeg')";
    imgContainer.style.backgroundImage =  newURL;
  }
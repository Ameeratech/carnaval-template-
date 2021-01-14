window.onload = () => {

    firstmore();
    secondmore();
  }
  
  const firstmore= () => {
    document.querySelector("#myBtn").addEventListener("click",() => {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
     
        if (dots.style.display === "none") {
         dots.style.display = "inline";
         btnText.innerHTML = "Read more";
         moreText.style.display = "none";
        } else {
         dots.style.display = "none";
         btnText.innerHTML = "Read less";
         moreText.style.display = "inline";
        }
  
    })
}
const secondmore= () => {
    document.querySelector("#myBtn2").addEventListener("click",() => {
        var dots2 = document.getElementById("dots2");
        var moreText2= document.getElementById("more2");
        var btnText2 = document.getElementById("myBtn2");
     
        if (dots2.style.display === "none") {
         dots2.style.display = "inline";
         btnText2.innerHTML = "Read more";
         moreText2.style.display = "none";
        } else {
         dots2.style.display = "none";
         btnText2.innerHTML = "Read less";
         moreText2.style.display = "inline";
        }
    })
}

// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
 
//     if (dots.style.display === "none") {
//      dots.style.display = "inline";
//      btnText.innerHTML = "Read more";
//      moreText.style.display = "none";
//     } else {
//      dots.style.display = "none";
//      btnText.innerHTML = "Read less";
//      moreText.style.display = "inline";
//     }
// //    }
//    function myFunctiontwo() {
    // var dots2 = document.getElementById("dots2");
    // var moreText2= document.getElementById("more2");
    // var btnText2 = document.getElementById("myBtn2");
 
    // if (dots2.style.display === "none") {
    //  dots2.style.display = "inline";
    //  btnText2.innerHTML = "Read more";
    //  moreText2.style.display = "none";
    // } else {
    //  dots2.style.display = "none";
    //  btnText2.innerHTML = "Read less";
    //  moreText2.style.display = "inline";
//     }

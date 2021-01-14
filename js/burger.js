// BTN = ההמבורגע שיקבל את האיי די
var btn = document.querySelector("#nav_btn");
// THENAV = התפריט ניווט שיקבל את ה איי די
var theNav = document.querySelector("#id_nav");



btn.addEventListener("click", function () {
 console.log("work")
 // בודק אם התפריט מוצג ואם לא מציג ואם כן מסתיר
 if (theNav.style.display != "block") {
  theNav.style.display = "block";
  // שורות שיש להוסיף אם עובדים עם בוטסטראפ
  // אם התפריט צריך להיות רק מאם די אז צריך לשנות את 
  // אל ג'י ל אם די
  theNav.className = "d-block d-lg-flex"
  // alert("check")
 } else {
  theNav.style.display = "none"
  // שורות שיש להוסיף אם עובדים עם בוטסטראפ
  // אם התפריט צריך להיות רק מאם די אז צריך לשנות את 
  // אל ג'י ל אם די
  theNav.className = " d-lg-flex"
 }
})

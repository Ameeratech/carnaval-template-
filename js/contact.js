
  document.querySelector("#id_form").addEventListener("submit",formSubmit );

  function formSubmit(){
    // alert("The form was submitted");

    // מנוע מהטופס לבצע את ברירת מחדל של שיגור
    if(id_name.value.length < 3){
      alert("name too short must to be more 2 letters")
    }
    else if(id_phone.value.length < 9){
      alert("Phone too short must to be more than 9 number")
    }
    // אינדקס אוף , אם לא מוצא תו מחזיר מינוס אחד
    else if(id_email.value.indexOf("@") == -1 || id_email.value.indexOf(".",id_email.value.indexOf("@")+1) == -1){
      alert("Email is not valid")
    }
    // אם הכל בסדר ישגר את עצמו
    else{
      id_form.submit();
    }
}
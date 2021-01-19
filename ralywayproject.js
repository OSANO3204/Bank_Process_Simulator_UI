

function validate_Form(){
let  MY_Name=document.forms["My_form"]["Name"].value;
let  MY_Passcode=document.forms["My_form"]["password"].value;
let  MY_mail=document.forms["My_form"]["elecmail"].value;
let  MY_Coment=document.forms["My_form"]["CoMent"].value;



if(MY_Name==""){
alert("ENTER FULL NAMES!!");
return false;}

if (MY_Passcode.length<= 7 || MY_Passcode != alphanumeric){
alert("Enter Corrrect Passoword Format ");
return false;}

if( MY_mail==""){
  alert("E-mail can't be empty");
  return false;}


if (MY_Coment==""){
  alert("Coment should be filled");
  return false;}

}

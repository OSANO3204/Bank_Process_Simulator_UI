function mortage_test(){
let  MY_FirstName=document.forms["mortage_form"]["f_NAME"].value;
let My_LName=document.forms["mortage_form"]["L_NAME"].value;
let My_Account_No=document.forms["mortage_form"]["Account_No"].value;
let My_Amount=document.forms["mortage_form"][ "number_Amount"].value;
let My_rate_VALUE= document.forms["mortage_form"]["Number_rate"].value;
let My_Time_Value=document.forms["mortage_form"]["Number_time_save"].value;
let modified_Rate= (My_rate_VALUE)/100;
let inner_Principal=1 + modified_Rate;
let out_Principal=Math.pow(inner_Principal,My_Time_Value);
let my_Uppper_interest=My_Amount * out_Principal;
let Whole_interest=my_Uppper_interest/inner_Principal;
let Big_interest=Math.round (Whole_interest,0);
let My_Reale_amount=Math.round(My_Amount ,0);
let Total_amount= Whole_interest + My_Reale_amount ;
let My_Total_Amount=Math.pow( Total_amount,1);


if(MY_FirstName==""){
alert("FIRST NAME cant be empty!!");
return false;}
if(My_LName==""){
  alert("Welcome " + MY_FirstName +  "!! To proceed please fill in your LAST NAME" );
  return false;
}
if(My_Account_No.length<=7){
  alert("Try again with the correct ACCOUNT NUMBER format(8 or more numbers)");
  return false;

}
if(My_Account_No.length>10){
  alert("Wrong or too long  ACCOUNT NUMBER try again with the CORRECT one (10-digit account number) ");
  return false;
}
if(My_Amount ==""){
  alert("Kindly fill in the AMOUNT for loan security");
  return false;
}
if(My_Amount <=999 ){
  alert( "Sorry  " + MY_FirstName +  " " + My_LName + "  but  the AMOUNT Ksh." +My_Amount + "  does not meet the minimum recommended saving AMOUNT of  Ksh.1000  for loan validity , please add  Ksh." + (1000-My_Amount) + " more to QUALIFY");
  return false;
}
if(My_rate_VALUE==""){
  alert("RATE can't be empty");
  return false;
}
if(My_rate_VALUE<0|| My_rate_VALUE>=5){
alert("Sorry Miss/Mr/Mrs. " + MY_FirstName + " " +My_LName +" kindly enter a value between 1% and 4%");
  return false;
}
if(My_Time_Value==""){
alert("SAVING PERIOD can't be empty!!!");
return false;
}
if(My_Amount !=""){

  alert("Account number "+ My_Account_No+  " ,Prospective Principal  Ksh." +My_Amount+ ", Rate of interest ="+My_rate_VALUE +"%(p.a) ,Time period  " +My_Time_Value+"years, Total prospective amount to be received Ksh." +  My_Total_Amount+"   Thank you for accessing GREENWOOD BANK LIMITED services!! We value you!!!");
  return false;
}

}

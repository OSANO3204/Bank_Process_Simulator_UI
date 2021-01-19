function login_validate(){
  let My_login_name= document.forms["register_division"]["value_Name"].value;
  let My_login_password=document.forms["register_division"]["pswrd"].value;
  if (My_login_name==""){
    alert("Names can't Be Empty");
    return false;}
    if( My_login_password==""){
      alert("Password can't be empty");
      return false;
    }


if ( My_login_password.length<=7 || My_login_password !=alphanumeric){
alert("TRY  AGAIN, Enter correct password")
return false

}
}

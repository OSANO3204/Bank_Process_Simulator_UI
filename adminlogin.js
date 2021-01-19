
alert("high");

function Login_form_validation(){
  let my_login__name=document.forms["LOGin_form"]["admin_logiin_name"].value;
  let my_log_in-pssowrd=document.forms["LOGin_form" ]["admin_passcode_login"].value;

  if(my_login__name==""){
    alert("This field can't be empty");
    return false;
  }
}

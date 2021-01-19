<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  <link href="calcsaver.css" rel="stylesheet">
  </head>
  <body>
<div class="main_operation_class ">
<div class="div_header">

<h3>GREENWOOD BANK LIMITED</h3>


</div>

<form  class="input_div"  name="mortage_form" action="coonect.php" onSubmit="return(mortage_test(////));" Method="POST">
<input class="mortgage_calculor" name="f_NAME" placeholder="First Name" type="text"></input>
<input class="mortgage_calculor"  name="L_NAME"  placeholder="Last Name" type="text"></input>
<input class="mortgage_calculor" name="Account_No"  placeholder= "Account Number" type="number"></input>
<input class="mortgage_calculor" name = "number_Amount"placeholder="Amount " type="number"></input>
<input class="mortgage_calculor" name = "Number_rate"placeholder="Rate(Between 1% and 4%)" type="number"></input>
<input class="mortgage_calculor" name = "Number_time_save"placeholder="Time for  saving(years) " type="number"></input>
<button type="Submit" Value="Submit Details" class="submit_details">Submit Details</button>


</div>

</div>

</form>
<script type="text/javascript" src="saving.js"></script>
</body>
</html>

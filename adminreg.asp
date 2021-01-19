<html>


<head>
<title>

</tile>


</head>

<body>



dim my_regADMIN_name= request.getString("firstName")
dim my_regADMIN_lastname= request.getString("LastName")
dim my_passcodeADMIN=Request.getString("paSsword")
dim my_EmailADMIN=Request.getString("email")


Request[''$request.querystring["my_regADMIN_name"]
Rquest[''$request.querystring["my_regADMIN_lastname"]
Rquest[''$request.querystring[" my_passcodeADMIN " ]
Rquest[''$request.querystring["  my_EmailADMIN=Request "]
SqlConnection conn = new SqlConnection(someConnectionString)
SqlCommand command = new SqlCommand("select * from table", conn);

        DataTable results = new DataTable();
        SqlDataAdapter adapter = new SqlDataAdapter(admin_registrtation_Table);
        conn.Open();
        adapter.Fill(results, admin_registrtation_Table);
        if(conn.open() ){
          response.write("successfully connected")
        }
else
response.write("connection error")
%>

%>
</body>
</html>

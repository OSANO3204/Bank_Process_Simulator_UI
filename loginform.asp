<html>
<head>

<title></title>

</head>

<body>
<%
dim my_reg_name= request.getString("value_Name")
dim my_passcode=Request.getString(pswrd")

Request[''$request.querystring("dim my_reg_name"]
Rquest[''$request.querystring("dim my_passcod"]

SqlConnection conn = new SqlConnection(someConnectionString)
SqlCommand command = new SqlCommand("select * from table", conn);

        DataTable results = new DataTable();
        SqlDataAdapter adapter = new SqlDataAdapter(command);
        conn.Open();
        adapter.Fill(results, LOG_IN_TABLE);
        if(conn.open() ){
          response.write("successfully connected")
        }
else
response.write("connection error")
%>


</body>


</html>

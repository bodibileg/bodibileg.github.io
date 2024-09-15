<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
</head>
<body>
<h1>Simple Calculator</h1>
<form action="calculate" method="post">
    <h3>Addition</h3>
    <label for="add1">Number 1:</label>
    <input type="number" id="add1" name="add1" value="<%= request.getParameter("add1") != null ? request.getParameter("add1") : "" %>">
    +
    <label for="add2">Number 2:</label>
    <input type="number" id="add2" name="add2" value="<%= request.getParameter("add2") != null ? request.getParameter("add2") : "" %>">
    =
    <input type="text" id="add-result" name="add-result" readonly value="<%= request.getAttribute("addResult") != null ? request.getAttribute("addResult") : "" %>">
    <br><br>

    <h3>Multiplication</h3>
    <label for="mul1">Number 1:</label>
    <input type="number" id="mul1" name="mul1" value="<%= request.getParameter("mul1") != null ? request.getParameter("mul1") : "" %>">
    *
    <label for="mul2">Number 2:</label>
    <input type="number" id="mul2" name="mul2" value="<%= request.getParameter("mul2") != null ? request.getParameter("mul2") : "" %>">
    =
    <input type="text" id="mul-result" name="mul-result" readonly value="<%= request.getAttribute("mulResult") != null ? request.getAttribute("mulResult") : "" %>">
    <br><br>

    <input type="submit" value="Submit">
</form>
</body>
</html>

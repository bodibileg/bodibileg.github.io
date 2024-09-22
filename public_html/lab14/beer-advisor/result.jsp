<%@ page import="java.util.*" %>

<html>
<body>
<h1 align="center">Beer Selection Page</h1>
<p>
    <c:forEach var="style" items="${styles}">
        <br>try: ${style}
    </c:forEach>
</p>
</body>
</html>
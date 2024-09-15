<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>Beer Advisor</title>
</head>
<body>
<h1>Beer Advisor</h1>
<form action="beer-advisor" method="get">
    <label for="beerType">Choose a Beer Type:</label>
    <select id="beerType" name="beerType">
        <option value="lager">Lager</option>
        <option value="ale">Ale</option>
        <option value="stout">Stout</option>
        <option value="porter">Porter</option>
        <option value="ipa">IPA</option>
    </select>
    <input type="submit" value="Find">
</form>
<p>
    <%
        String beerType = (String) request.getAttribute("beerType");
        String brand = (String) request.getAttribute("brand");
        if (beerType != null && brand != null) {
            out.println("Beer type selected: " + beerType);
            out.println("<br>Recommended brand: " + brand);
        }
    %>
</p>
</body>
</html>

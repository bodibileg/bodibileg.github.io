package com.example.calculator;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/calculate")
public class CalculatorServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Get parameters
        String add1 = request.getParameter("add1");
        String add2 = request.getParameter("add2");
        String mul1 = request.getParameter("mul1");
        String mul2 = request.getParameter("mul2");

        // Initialize results
        int sumResult = 0;
        int mulResult = 0;

        // Try parsing inputs and performing calculations
        try {
            int num1 = Integer.parseInt(add1);
            int num2 = Integer.parseInt(add2);
            sumResult = num1 + num2;
            request.setAttribute("addResult", sumResult);
        } catch (NumberFormatException e) {
            request.setAttribute("addResult", "Invalid");
        }

        try {
            int num3 = Integer.parseInt(mul1);
            int num4 = Integer.parseInt(mul2);
            mulResult = num3 * num4;
            request.setAttribute("mulResult", mulResult);
        } catch (NumberFormatException e) {
            request.setAttribute("mulResult", "Invalid");
        }

        RequestDispatcher dispatcher = request.getRequestDispatcher("index.jsp");
        dispatcher.forward(request, response);
    }
}

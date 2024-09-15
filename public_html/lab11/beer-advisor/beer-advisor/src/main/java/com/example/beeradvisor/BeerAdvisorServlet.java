package com.example.beeradvisor;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/beer-advisor")
public class BeerAdvisorServlet extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String beerType = request.getParameter("beerType");

        String brand = "";
        if (beerType != null) {
            switch (beerType) {
                case "lager":
                    brand = "Budweiser";
                    break;
                case "ale":
                    brand = "Pale Ale";
                    break;
                case "stout":
                    brand = "Guinness";
                    break;
                case "porter":
                    brand = "Samuel Smith's";
                    break;
                case "ipa":
                    brand = "Sierra Nevada";
                    break;
                default:
                    brand = "Unknown";
            }
        }

        request.setAttribute("beerType", beerType);
        request.setAttribute("brand", brand);

        request.getRequestDispatcher("/beer-advisor.jsp").forward(request, response);
    }
}

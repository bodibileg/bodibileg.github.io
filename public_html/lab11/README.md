# Status report

- MVS tutorial: completed. Successfully created and tested the beer advisor servlet. Faced issues with servlet request handling; resolved by reviewing documentation.
- calculator servlet: completed. Implemented addition, subtraction, multiplication, and division operations. Encountered issues with session management; fixed by adjusting session handling logic.
- deployment exercise: completed. Configured deployment settings and verified successful deployment.

## Deployment Lab Answers

1.What is the purpose of the directory structure given on p. 30? Ensures that the server can correctly locate and load application resources by maintaining an organized directory layout.

2.What is the purpose of the directory structure given on p. 31? Facilitates the manual packaging of the application into a WAR file, which is necessary for deployment.

3.Why do you need to be in the project1 directory for step 5? Being in the correct directory ensures that file paths are accurately referenced during the deployment process.

4.Why is the copying of step 6 necessary? Ensures that files are placed in the correct structure so the server can access and serve them properly.

5.Where is the name of the web app defined? Try changing it. The web app name is defined by the WAR file or directory name; modifying it updates the access URL.

6.Why is step 9 necessary? Try changing display text in the servlet. What steps are necessary for your changes to appear in the browser? Restarting Tomcat is needed to reload changes; recompile the servlet, redeploy the application, and clear the browser cache to view updates.

7. Describe an interesting problem you encountered (if any) and how you solved it. I initially struggled with incorrect file permissions that prevented the server from accessing updated resources. I resolved the issue by adjusting file permissions and verifying that the server had the necessary access rights to the deployment directory.

## Beer Advisor Test File

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

## Comment on Work and Study

Today, I explored advanced servlet handling and learned how to better manage session data in a web application. This experience improved my understanding of servlet lifecycle and request handling.

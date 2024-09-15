
import static org.junit.jupiter.api.Assertions.*;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.beeradvisor.BeerAdvisorServlet;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class BeerAdvisorServletTest extends Mockito {

    private BeerAdvisorServlet servlet;

    @BeforeEach
    public void setUp() {
        servlet = new BeerAdvisorServlet();
    }

    @Test
    public void testDoGetWithValidBeerType() throws ServletException, IOException {
        HttpServletRequest request = mock(HttpServletRequest.class);
        HttpServletResponse response = mock(HttpServletResponse.class);

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PrintWriter writer = new PrintWriter(baos);
        when(response.getWriter()).thenReturn(writer);

        when(request.getParameter("beerType")).thenReturn("lager");

        servlet.doGet(request, response);

        writer.flush();
        writer.close();

        String output = baos.toString();

        assertTrue(output.contains("Beer type selected: lager"));
        assertTrue(output.contains("Recommended brand: Budweiser"));
    }

    @Test
    public void testDoGetWithInvalidBeerType() throws ServletException, IOException {
        HttpServletRequest request = mock(HttpServletRequest.class);
        HttpServletResponse response = mock(HttpServletResponse.class);

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PrintWriter writer = new PrintWriter(baos);
        when(response.getWriter()).thenReturn(writer);

        when(request.getParameter("beerType")).thenReturn("unknown");

        servlet.doGet(request, response);

        writer.flush();
        writer.close();

        String output = baos.toString();

        assertTrue(output.contains("Beer type selected: unknown"));
        assertTrue(output.contains("Recommended brand: Unknown"));
    }
}

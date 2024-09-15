package com.example.quiz;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class QuizServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession session = request.getSession();
        Quiz quiz = (Quiz) session.getAttribute("quiz");

        if (quiz == null) {
            quiz = new Quiz();
            session.setAttribute("quiz", quiz);
        }

        if (quiz.isQuizOver()) {
            response.getWriter().println("<h1>Quiz Over</h1>");
            response.getWriter().println("<p>Your current score is: " + quiz.getScore() +".</p>");
            response.getWriter().println("<p>You have completed the Number Quiz with a score of " + quiz.getScore() + " out of "+ quiz.getQuestionCount() +".</p>");
            session.invalidate();
        } else {
            response.getWriter().println("<h1>The Number Quiz</h1>");
            response.getWriter().println("<p>Your current score is: " + quiz.getScore() +".</p>");
            response.getWriter().println("<p>What is the next number in the sequence?</p>");
            response.getWriter().println("<p>" + quiz.getCurrentQuestion() + "</p>");
            response.getWriter().println("<form action='quiz' method='post'>");
            response.getWriter().println("<input type='number' name='answer' />");
            response.getWriter().println("<input type='submit' value='Submit' />");
            response.getWriter().println("</form>");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession session = request.getSession();
        Quiz quiz = (Quiz) session.getAttribute("quiz");

        if (quiz == null) {
            response.sendRedirect("quiz");
            return;
        }

        int answer = Integer.parseInt(request.getParameter("answer"));
        quiz.checkAnswer(answer);

        doGet(request, response);
    }
}

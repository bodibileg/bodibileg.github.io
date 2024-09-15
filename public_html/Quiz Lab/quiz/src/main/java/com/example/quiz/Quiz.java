package com.example.quiz;


import java.util.ArrayList;
import java.util.List;

public class Quiz {
    private final List<String> questions;
    private final List<Integer> answers;
    private int currentQuestion;
    private int score;

    public Quiz() {
        questions = new ArrayList<>();
        answers = new ArrayList<>();
        initializeQuestions();
        currentQuestion = 0;
        score = 0;
    }

    private void initializeQuestions() {
        questions.add("3 1 4 1 5");
        answers.add(9);

        questions.add("2 4 6 8 10");
        answers.add(12);

        questions.add("1 1 2 3 5");
        answers.add(8);

        questions.add("1 4 9 16 25");
        answers.add(36);

        questions.add("2 3 5 7 11");
        answers.add(13);
    }

    public String getCurrentQuestion() {
        return questions.get(currentQuestion);
    }

    public boolean checkAnswer(int answer) {
        if (answers.get(currentQuestion) == answer) {
            score++;
            currentQuestion++;
            return true;
        } else {
            currentQuestion++;
            return false;
        }
    }

    public boolean isQuizOver() {
        return currentQuestion >= questions.size();
    }

    public int getScore() {
        return score;
    }

    public int getQuestionCount() {
        return questions.size();
    }
}

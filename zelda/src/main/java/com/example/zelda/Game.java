package com.example.zelda;

import java.util.Random;

public class Game {
    private int id = new Random().nextInt();
    private String title;

    private int year;
    private String system;
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getSystem() {
        return system;
    }

    public void setSystem(String system) {
        this.system = system;
    }

    public Game(int id, String title, int year, String system) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.system = system;
    }


}

package com.example.zelda;

import javax.persistence.*;

@Entity
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;

    private String year;
    private String platform;
    @Column(length= 600)
    private String summary;
    @Column(length= 600)
    private String boxArt;

    public Game(long id, String title, String year, String platform, String summary, String boxArt) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.platform = platform;
        this.summary = summary;
        this.boxArt = boxArt;
    }

    public Game() {
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getBoxArt() {
        return boxArt;
    }

    public void setBoxArt(String boxArt) {
        this.boxArt = boxArt;
    }

    public long getId() {
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

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }





}

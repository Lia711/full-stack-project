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

    @Column(length= 600)
    private String gif1;

    @Column(length= 600)
    private String gif2;

    public Game(long id, String title, String year, String platform, String summary, String boxArt, String gif1, String gif2) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.platform = platform;
        this.summary = summary;
        this.boxArt = boxArt;
        this.gif1 = gif1;
        this.gif2 = gif2;
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

    public String getGif1() {
        return gif1;
    }

    public void setGif1(String gif1) {
        this.gif1 = gif1;
    }

    public String getGif2() {
        return gif2;
    }

    public void setGif2(String gif2) {
        this.gif2 = gif2;
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

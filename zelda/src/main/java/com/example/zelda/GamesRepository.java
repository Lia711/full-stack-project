package com.example.zelda;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class GamesRepository {
    private final List<Game> games = new ArrayList<>();

    public List <Game> getAllGames() {
        return games;
    }

    public Game getGameById(int id) {
        for (Game game : games) {
            if(game.getId()==id) {
                return game;
            }
        } return null;
    }
}

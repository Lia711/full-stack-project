package com.example.zelda;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AppController {

    @Autowired
    GamesService gamesService;

    @PostMapping("/game")
    public Game createGame(@RequestBody Game game) {
        gamesService.addGame(game);
        return game;
    }

    @GetMapping("/games")
    public List<Game> getGames() {
        return gamesService.getAllGames();
    }

    @GetMapping("game/{id}")
    public Game getGameById(@PathVariable int id) {
        return gamesService.getGameById(id);
    }

}


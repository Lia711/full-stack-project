package com.example.zelda;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public Game getGameById(@PathVariable long id) {
        return gamesService.getGameById(id);
    }

    @GetMapping("/game/random")
    public Game getRandomGame() {
        return gamesService.getRandomGame();
    }

    @PutMapping("/game/{id}")
    public Game updateGame(@RequestBody Game newGame, @PathVariable long id) {
        newGame.setId(id);
        gamesService.updateGame(newGame, id);
        return newGame;
    }

    @DeleteMapping("/game/{id}")
    public void deleteGameById(@PathVariable long id) {
        gamesService.deleteGameById(id);
    }

}


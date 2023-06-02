package com.example.zelda;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AppController {
    List<String> games = new ArrayList<>();
    {
        games.addAll(List.of("The Legend of Zelda", "Zelda II: The Adventure of Link", "The Legend of Zelda: A Link to the Past", "The Legend of Zelda: Link's Awakening"));
    }

    @GetMapping("/intro")
    public String intro() {
        return "Intro page about Zelda games";
    }

    @GetMapping("/games")
    public List<String> games() {
        return games;
    }

    @GetMapping("game/{id}")
    public String getGameById(@PathVariable int id) {
        return games.get(id);
    }

}


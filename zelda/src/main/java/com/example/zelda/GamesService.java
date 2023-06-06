package com.example.zelda;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class GamesService {
    @Autowired
    GamesRepository gamesRepository;

    public Game getGameById(long id) {
        Optional<Game> game = gamesRepository.findById(id);
        return game.get();
    }

    public List<Game> getAllGames() {
        return gamesRepository.findAll().stream().collect(Collectors.toList());
    }
}

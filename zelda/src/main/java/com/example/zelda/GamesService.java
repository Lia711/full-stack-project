package com.example.zelda;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class GamesService {
    @Autowired
    GamesRepository gamesRepository;

    public void addGame(Game game){
        gamesRepository.save(game);
    }
    public Game getGameById(long id) {
        Optional<Game> game = gamesRepository.findById(id);
        return game.get();
    }

    public List<Game> getAllGames() {
        return gamesRepository.findAll().stream().collect(Collectors.toList());
    }

    public Game getRandomGame() {
        return gamesRepository.getRandomGame();
    }

    public void updateGame(Game newGame, long id) {
        newGame.setId(id);
        gamesRepository.save(newGame);
    }

    @Transactional
    public void deleteGameById(long id) {
        gamesRepository.deleteGameById(id);
    }
}

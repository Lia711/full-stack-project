package com.example.zelda;

import com.example.zelda.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface GamesRepository extends JpaRepository<Game, Long> {

    @Query(value="SELECT * FROM game ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Game getRandomGame();

    void deleteGameById(long id);

}



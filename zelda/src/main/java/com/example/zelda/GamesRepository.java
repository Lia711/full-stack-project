package com.example.zelda;

import com.example.zelda.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface GamesRepository extends JpaRepository<Game, Long> {

}



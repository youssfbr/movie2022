package com.github.youssfbr.movie.repositories;

import com.github.youssfbr.movie.entities.Score;
import com.github.youssfbr.movie.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IScoreRepository extends JpaRepository<Score, ScorePK> {
}
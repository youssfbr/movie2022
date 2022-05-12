package com.github.youssfbr.movie.services.interfaces;

import com.github.youssfbr.movie.dtos.MovieDTO;
import com.github.youssfbr.movie.dtos.ScoreDTO;

public interface IScoreService {

    MovieDTO saveScore(ScoreDTO scoreDTO);

}

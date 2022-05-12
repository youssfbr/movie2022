package com.github.youssfbr.movie.controllers;

import com.github.youssfbr.movie.dtos.MovieDTO;
import com.github.youssfbr.movie.dtos.ScoreDTO;
import com.github.youssfbr.movie.services.interfaces.IScoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/scores")
@RequiredArgsConstructor
public class ScoreController {

    private final IScoreService scoreService;

    @PutMapping
    public MovieDTO saveScore(@RequestBody @Valid ScoreDTO scoreDTO) {
        return scoreService.saveScore(scoreDTO);
    }

}
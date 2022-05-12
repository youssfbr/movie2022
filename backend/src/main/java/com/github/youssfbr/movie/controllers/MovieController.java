package com.github.youssfbr.movie.controllers;

import com.github.youssfbr.movie.dtos.MovieDTO;
import com.github.youssfbr.movie.services.interfaces.IMovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/movies")
@RequiredArgsConstructor
public class MovieController {

    private final IMovieService movieService;

    @GetMapping
    public Page<MovieDTO> findAll(final Pageable pageable) {
        return movieService.findAll(pageable);
    }

    @GetMapping("{id}")
    public MovieDTO findById(final @PathVariable Long id) {
        return movieService.findById(id);
    }

}

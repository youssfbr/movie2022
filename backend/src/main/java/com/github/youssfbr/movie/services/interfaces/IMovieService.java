package com.github.youssfbr.movie.services.interfaces;

import com.github.youssfbr.movie.dtos.MovieDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IMovieService {

    Page<MovieDTO> findAll(Pageable pageable);
    MovieDTO findById(final Long id);

}

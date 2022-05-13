package com.github.youssfbr.movie.services;

import com.github.youssfbr.movie.dtos.MovieDTO;
import com.github.youssfbr.movie.entities.Movie;
import com.github.youssfbr.movie.mapper.IMovieMapper;
import com.github.youssfbr.movie.repositories.IMovieRepository;
import com.github.youssfbr.movie.services.exceptions.ResourceNotFoundException;
import com.github.youssfbr.movie.services.interfaces.IMovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MovieService implements IMovieService {

    private final IMovieRepository movieRepository;
    private static final IMovieMapper movieMapper = IMovieMapper.INSTANCE;
    private static final String MESSAGE_ID = "Filme não encontrado. Id: ";

    @Override
    @Transactional(readOnly = true)
    public Page<MovieDTO> findAll(Pageable pageable) {

        Page<Movie> result = movieRepository.findAll(pageable);

        return result.map(movieMapper::toDTO);
    }

    @Override
    @Transactional(readOnly = true)
    public MovieDTO findById(Long id) {
        return movieRepository
                .findById(id)
                .map(movieMapper::toDTO)
                .orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ID + id));
    }
}

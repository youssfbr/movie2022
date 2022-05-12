package com.github.youssfbr.movie.repositories;

import com.github.youssfbr.movie.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IMovieRepository extends JpaRepository<Movie, Long> {
}

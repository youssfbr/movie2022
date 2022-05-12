package com.github.youssfbr.movie.repositories;

import com.github.youssfbr.movie.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

}
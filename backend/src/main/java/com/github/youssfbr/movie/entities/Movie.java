package com.github.youssfbr.movie.entities;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "tb_movie")
@Getter
@Setter
@RequiredArgsConstructor
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private Double score;
    private Integer count;
    private String image;

    @OneToMany(mappedBy = "id.movie")
    private final Set<Score> scores = new HashSet<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Movie movie = (Movie) o;
        return id != null && Objects.equals(id, movie.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}

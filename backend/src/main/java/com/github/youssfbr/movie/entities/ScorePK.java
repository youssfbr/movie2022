package com.github.youssfbr.movie.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.Hibernate;

import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
public class ScorePK implements Serializable {

    private static final long serialVersionUID = 1L;

    @ManyToOne
    private Movie movie;

    @ManyToOne
    private User user;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        ScorePK scorePK = (ScorePK) o;
        return movie != null && Objects.equals(movie, scorePK.movie)
                && user != null && Objects.equals(user, scorePK.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(movie, user);
    }
}

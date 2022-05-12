package com.github.youssfbr.movie.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ScoreDTO {

    private Long movieId;

    @NotEmpty(message = "{email.required}")
    @Email(message = "{email.invalid}")
    private String email;

    private Double score;

}

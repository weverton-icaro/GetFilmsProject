/* eslint-disable no-plusplus */
import { injectable, inject } from "tsyringe";

import { axiosData } from "@modules/helpers/axios";
import { IMovieRepository } from "@modules/repositories/IMovieRepository";

import { AppError } from "../../shared/errors/AppError";

@injectable()
export class AddMoviesServices {
  constructor(
    @inject("MovieRepository")
    private movieRepository: IMovieRepository
  ) {}

  async execute() {
    const movies = await axiosData();

    await movies.map(async (movie) => {
      const exists = await this.movieRepository.findById(movie.id);

      if (!exists) {
        try {
          await this.movieRepository.create({
            id_api: movie.id,
            title: movie.title,
            original_title: movie.original_title,
            image: movie.image,
            movie_banner: movie.movie_banner,
            original_title_romanised: movie.original_title_romanised,
            description: movie.description,
            director: movie.director,
            producer: movie.producer,
            release_date: movie.release_date,
            running_time: movie.running_time,
            rt_score: movie.rt_score,
            people: JSON.stringify(movie.people),
            species: JSON.stringify(movie.species),
            locations: JSON.stringify(movie.locations),
            vehicles: JSON.stringify(movie.vehicles),
            url: movie.url,
          });

          return;
        } catch (error) {
          console.log("ERROR => \n", error);
          throw new AppError("Unable to add list to database.", error);
        }
      }
    });
  }
}

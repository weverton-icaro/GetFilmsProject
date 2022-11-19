import { container } from "tsyringe";

import { MovieRepository } from "@modules/repositories/movieRepository";

import { IMovieRepository } from "../../modules/repositories/IMovieRepository";

container.registerSingleton<IMovieRepository>(
  "MovieRepository",
  MovieRepository
);

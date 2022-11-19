import { injectable, inject } from "tsyringe";

import { IMovieRepository } from "@modules/repositories/IMovieRepository";

import { AppError } from "../../shared/errors/AppError";
import { IMovieRequest } from "../interface/IMovie.interface";

@injectable()
export class FindMoviesServices {
  constructor(
    @inject("MovieRepository")
    private movieRepository: IMovieRepository
  ) {}

  async execute(params: IMovieRequest) {
    const page = params.page || null;
    const limit = params.limit || 10;
    const messageError = "Content not found.";

    let result: any;
    try {
      if (params.score) {
        try {
          result = await this.movieRepository.findByScore(
            params.score,
            page,
            limit
          );
          return result;
        } catch (error) {
          console.log(error);
          throw new AppError(messageError, 400);
        }
      }

      if (params.title || params.original_title) {
        try {
          result = await this.movieRepository.findByName(
            page,
            limit,
            params.title,
            params.original_title
          );
          return result;
        } catch (error) {
          console.log(error);
          throw new AppError(messageError, 400);
        }
      }

      if (params.release) {
        try {
          result = await this.movieRepository.findByRelease(
            params.release,
            page,
            limit
          );
          return result;
        } catch (error) {
          console.log(error);
          throw new AppError(messageError, 400);
        }
      }

      if (params.director) {
        try {
          result = await this.movieRepository.findByDirector(
            params.director,
            page,
            limit
          );
          return result;
        } catch (error) {
          console.log(error);
          throw new AppError(messageError, 400);
        }
      }

      result = await this.movieRepository.listAll(page, limit);

      return result;
    } catch (error) {
      console.log(error);
      throw new AppError(messageError, 400);
    }
  }
}

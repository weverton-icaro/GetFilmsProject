import { IAddMovie } from "@modules/interface/IMovie.interface";
import { Movie } from "@shared/infra/typeorm/entities/Movie";

export interface IMovieRepository {
  create(data: IAddMovie): Promise<void>;

  listAll(page: number, limit: number): Promise<Movie[]>;

  findByName(
    page: number,
    limit: number,
    title?: string,
    original_title?: string
  ): Promise<Movie[]>;

  findByRelease(
    release_date: string,
    page: number,
    limit: number
  ): Promise<Movie[]>;

  findByScore(rt_score: string, page: number, limit: number): Promise<Movie[]>;

  findById(id_url: string): Promise<Movie>;

  findByDirector(
    director: string,
    page: number,
    limit: number
  ): Promise<Movie[]>;
}

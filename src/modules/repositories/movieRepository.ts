import { getRepository, Repository } from "typeorm";

import { IAddMovie } from "@modules/interface/IMovie.interface";
import { Movie } from "@shared/infra/typeorm/entities/Movie";

import { IMovieRepository } from "./IMovieRepository";

export class MovieRepository implements IMovieRepository {
  private repository: Repository<Movie>;

  constructor() {
    this.repository = getRepository(Movie);
  }

  async create({
    id_api,
    title,
    original_title,
    original_title_romanised,
    image,
    movie_banner,
    description,
    director,
    producer,
    release_date,
    running_time,
    rt_score,
    people,
    species,
    locations,
    vehicles,
    url,
  }: IAddMovie): Promise<void> {
    const movies = this.repository.create({
      id_api,
      title,
      original_title,
      original_title_romanised,
      image,
      movie_banner,
      description,
      director,
      producer,
      release_date,
      running_time,
      rt_score,
      people,
      species,
      locations,
      vehicles,
      url,
    });

    await this.repository.save(movies);
  }

  async listAll(page: number, limit: number): Promise<Movie[]> {
    const movies = await this.repository
      .createQueryBuilder("movies")
      .orderBy("release_date", "DESC")
      .skip(page)
      .take(limit)
      .getMany();
    return movies;
  }

  async findByName(
    page: number,
    limit: number,
    title?: string,
    original_title?: string
  ): Promise<Movie[]> {
    const movie = await this.repository
      .createQueryBuilder("movies")
      .where("title like :name", { name: `%${title}%` })
      .orWhere({ original_title })
      .orderBy("release_date", "DESC")
      .skip(page)
      .take(limit)
      .getMany();

    return movie;
  }

  async findByRelease(
    release_date: string,
    page: number,
    limit: number
  ): Promise<Movie[]> {
    const movies = await this.repository
      .createQueryBuilder("movies")
      .where({ release_date })
      .orderBy("release_date", "DESC")
      .skip(page)
      .take(limit)
      .getMany();

    return movies;
  }

  async findByScore(
    rt_score: string,
    page: number,
    limit: number
  ): Promise<Movie[]> {
    const movies = await this.repository
      .createQueryBuilder("movies")
      .where({ rt_score })
      .orderBy("release_date", "DESC")
      .skip(page)
      .take(limit)
      .getMany();

    return movies;
  }

  async findById(id_url: string): Promise<Movie> {
    const movie = await this.repository.findOne(id_url);
    return movie;
  }

  async findByDirector(
    director: string,
    page: number,
    limit: number
  ): Promise<Movie[]> {
    const movie = await this.repository
      .createQueryBuilder("movies")
      .where({ director })
      .orderBy("release_date", "DESC")
      .skip(page)
      .take(limit)
      .getMany();
    return movie;
  }
}

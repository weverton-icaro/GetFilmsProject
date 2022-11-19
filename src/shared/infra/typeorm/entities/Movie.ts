import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("movies")
export class Movie {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  id_api: string;

  @Column()
  title: string;

  @Column()
  original_title: string;

  @Column()
  original_title_romanised: string;

  @Column()
  image: string;

  @Column()
  movie_banner: string;

  @Column()
  description: string;

  @Column()
  director: string;

  @Column()
  producer: string;

  @Column()
  release_date: string;

  @Column()
  running_time: string;

  @Column()
  rt_score: string;

  @Column()
  people: string;

  @Column()
  species: string;

  @Column()
  locations: string;

  @Column()
  vehicles: string;

  @Column()
  url: string;
}

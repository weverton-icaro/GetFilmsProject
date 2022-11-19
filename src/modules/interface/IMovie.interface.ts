export interface IMovieRequest {
  title?: string;

  original_title?: string;

  release?: string;

  director?: string;

  score?: string;

  page?: number;

  limit?: number;
}

export interface IAddMovie {
  id_api: string;

  title: string;

  original_title: string;

  original_title_romanised: string;

  image: string;

  movie_banner: string;

  description: string;

  director: string;

  producer: string;

  release_date: string;

  running_time: string;

  rt_score: string;

  people?: string;

  species?: string;

  locations?: string;

  vehicles?: string;

  url: string;
}

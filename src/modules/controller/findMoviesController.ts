import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindMoviesServices } from "@modules/services/findMoviesServices";

export class FindMoviesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, original_title, release, director, score, page, limit } =
      request.body;

    const findMoviesServices = container.resolve(FindMoviesServices);

    const result = await findMoviesServices.execute({
      title,
      original_title,
      release,
      director,
      score,
      page: Number(page),
      limit: Number(limit),
    });

    return response.json(result);
  }
}

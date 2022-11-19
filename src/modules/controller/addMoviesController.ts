import { Request, Response } from "express";
import { container } from "tsyringe";

import { AddMoviesServices } from "@modules/services/addMoviesServices";

export class AddMoviesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findMoviesServices = container.resolve(AddMoviesServices);

    await findMoviesServices.execute();

    return response.status(201).json("Created");
  }
}

import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "movies";

export class Movie1668724195041 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: TableName,
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "id_api",
            type: "varchar",
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "original_title",
            type: "varchar",
          },
          {
            name: "original_title_romanised",
            type: "varchar",
          },
          {
            name: "image",
            type: "varchar",
          },
          {
            name: "movie_banner",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "director",
            type: "varchar",
          },
          {
            name: "producer",
            type: "varchar",
          },
          {
            name: "release_date",
            type: "varchar",
          },
          {
            name: "running_time",
            type: "varchar",
          },
          {
            name: "rt_score",
            type: "varchar",
          },
          {
            name: "people",
            type: "varchar",
          },
          {
            name: "species",
            type: "varchar",
          },
          {
            name: "locations",
            type: "varchar",
          },
          {
            name: "vehicles",
            type: "varchar",
          },
          {
            name: "url",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TableName);
  }
}

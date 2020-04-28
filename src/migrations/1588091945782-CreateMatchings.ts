import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMatchings1588091945782 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'matchings',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'recordingId',
            type: 'integer',
          },
          {
            name: 'tabulationId',
            type: 'integer',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('matchings', true);
  }
}

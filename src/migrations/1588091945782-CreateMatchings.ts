import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMatchings1588091945782 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'matchings',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'recordingId',
            type: 'int',
          },
          {
            name: 'tabulationId',
            type: 'int',
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

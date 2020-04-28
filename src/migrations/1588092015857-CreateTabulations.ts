import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTabulations1588092015857 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tabulations',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'clientName',
            type: 'text',
          },
          {
            name: 'protocol',
            type: 'text',
          },
          {
            name: 'dateService',
            type: 'text',
          },
          {
            name: 'binedNumber',
            type: 'text',
          },

          {
            name: 'accessNumber',
            type: 'text',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tabulations', true);
  }
}

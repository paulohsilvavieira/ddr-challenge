import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTabulations1588092015857 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tabulations',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'clientName',
            type: 'text',
          },
          {
            name: 'binedNumber',
            type: 'text',
          },
          {
            name: 'acessNumber',
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

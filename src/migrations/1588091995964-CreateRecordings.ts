import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRecordings1588091995964 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'recordings',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'phone',
            type: 'text',
          },
          {
            name: 'ramal',
            type: 'text',
          },
          {
            name: 'dateRecording',
            type: 'text',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('recordings', true);
  }
}

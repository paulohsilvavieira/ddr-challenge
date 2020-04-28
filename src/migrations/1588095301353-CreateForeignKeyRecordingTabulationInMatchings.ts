import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class CreateForeignKeyRecordingTabulationInMatchings1588095301353
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createForeignKey(
      'matchings',
      new TableForeignKey({
        columnNames: ['tabulationId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tabulations',
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'matchings',
      new TableForeignKey({
        columnNames: ['recordingId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'recordings',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const table = await queryRunner.getTable('matchings');
    const foreignKeyRecording = table.foreignKeys.find(
      fk => fk.columnNames.indexOf('recordingId') !== -1,
    );
    const foreignKeyTabulation = table.foreignKeys.find(
      fk => fk.columnNames.indexOf('tabulationId') !== -1,
    );
    await queryRunner.dropForeignKey('matchings', foreignKeyRecording);
    await queryRunner.dropForeignKey('matchings', foreignKeyTabulation);
  }
}

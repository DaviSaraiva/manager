import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateProjects1630336857112 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'projects',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
        },
        {
            name: 'name',
            type: 'varchar',
        },
        {
          name: 'client_id',
          type: 'uuid',
        },
        {
          name: 'status',
          type: 'varchar',
        },
        {
          name: 'logo',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'description',
          type: 'text',
        },
        {
            name: 'create_at',
            type: 'timestamp',
            default: 'now()',
        },
        {
          name: 'update_at',
          type: 'timestamp',
          default: 'now()',
        },
      ],
      foreignKeys: [
        {
          name: 'ProjectsClient',
          columnNames: ['client_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'clients',
          onDelete: 'SET NULL', // SE DELETAR O CLIENTE PROJETO PERMANCE
          onUpdate: 'CASCADE',// SE MUDAR O ID MUDA AQ TAMBÉM 
        },
      ],
    }),
    );
  }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('projects');
    }

}
 
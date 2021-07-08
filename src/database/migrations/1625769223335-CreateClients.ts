import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateClients1625769223335 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'clients',
            columns:[
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
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'telephone',
                    type: 'varchar',
                },
                {
                    name: 'cpf',
                    type: 'varchar',
                },
                {
                    name: 'code',
                    type: 'varchar',
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
        })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('clients');
    }

}

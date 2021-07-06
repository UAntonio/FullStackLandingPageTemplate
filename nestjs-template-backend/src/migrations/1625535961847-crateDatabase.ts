import {MigrationInterface, QueryRunner} from "typeorm";

export class crateDatabase1625535961847 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createDatabase("yourcar",true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropDatabase("yourcar",true);
    }

}

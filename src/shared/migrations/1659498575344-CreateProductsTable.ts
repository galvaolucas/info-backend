import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProductsTable1659498575344 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'products',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isUnique: true,
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
                },
                {
                  name: 'description',
                  type: 'varchar',
                },
                {
                  name: 'price',
                  type: 'decimal',
                  precision: 8,
                  scale: 2,
                },
                {
                  name: 'discount',
                  type: 'decimal',
                  precision: 8,
                  scale: 2,
                },
                {
                  name: 'parcel',
                  type: 'decimal',
                  precision: 5,
                  scale: 2,
                },
                {
                  name: 'parcel_price',
                  type: 'decimal',
                  precision: 3,
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
                },
                {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
                },
              ],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }
}

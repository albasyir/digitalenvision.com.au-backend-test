import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateTableUsers extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      /**
       * Required Fields
       */
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.date('birth_day').notNullable()
      table.string('birth_timezone').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

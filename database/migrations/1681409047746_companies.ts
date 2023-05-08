/* eslint-disable prettier/prettier */
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'companies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 255).notNullable()
      table.integer('companyId')
      table.boolean('isEnabled').defaultTo(true)
      table.timestamp('createdAt')
      table.timestamp('updatedAt')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

/* eslint-disable prettier/prettier */
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 255).notNullable()
      table.boolean('isEnabled').defaultTo(false)
      table.integer('companyId').notNullable()
      table.timestamp('createdAt')
      table.timestamp('updatedAt')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

/* eslint-disable prettier/prettier */
import { DateTime } from 'luxon'
import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @manyToMany(() => User, {
    pivotTable: 'user_user',
    pivotForeignKey: 'user_id',
    pivotRelatedForeignKey: 'related_user_id',
    pivotColumns: ['created_at', 'updated_at'],
  })
  public users: ManyToMany<typeof User>

  @column()
  public companyId: number

  @column()
  public isEnabled: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
}

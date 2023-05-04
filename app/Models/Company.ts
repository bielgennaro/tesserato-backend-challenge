/* eslint-disable prettier/prettier */
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import { DateTime } from 'luxon'

export default class Company extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({columnName: 'company_name'})
  public name: string

  @hasMany(() => User)
  public companyId: HasMany<typeof User>

  @column({ columnName: 'is_enabled, default: false' })
  public isEnabled: boolean

  @hasMany(() => User)
  public users: HasMany<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

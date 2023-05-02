/* eslint-disable prettier/prettier */
import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, Has, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Company from 'App/Models/Company'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({columnName: 'user_name'})
  public name: string
  
  @hasMany(() => Company)
  public companyId: HasMany<typeof Company>

  @column({ columnName: 'is_enabled' })
  public isEnabled: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

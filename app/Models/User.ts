/* eslint-disable prettier/prettier */
import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Company from 'App/Models/Company'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @belongsTo(() => Company)
  public company_name: BelongsTo<typeof Company>

  @column({ columnName: 'is_enabled' })
  public isEnabled: boolean

  @column({ columnName: 'company_id' })
  public companyId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

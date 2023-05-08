/* eslint-disable prettier/prettier */
import { DateTime } from 'luxon'
import { BaseModel, column,} from '@ioc:Adonis/Lucid/Orm'
export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string
  
  @column()
  public companyId: number

  @column()
  public isEnabled: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
}

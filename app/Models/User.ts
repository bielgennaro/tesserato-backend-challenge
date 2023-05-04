/* eslint-disable prettier/prettier */
import { DateTime } from 'luxon'
import { BaseModel, column,} from '@ioc:Adonis/Lucid/Orm'
export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({columnName: 'user_name'})
  public name: string
  
  @column({columnName: 'company_id'})
  public companyId: number

  @column({ columnName: 'is_enabled' })
  public isEnabled: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Employer from './Employer'

export default class Entity extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public employerId: number | null

  @belongsTo(() => Employer)
  public employer: BelongsTo<typeof Employer>
}

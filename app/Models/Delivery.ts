import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import { v4 as uuid } from 'uuid'

export default class Delivery extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public deliveryman_id: string

  @column()
  public product: string

  @column()
  public address: string

  @column()
  public postal_code: number

  @column()
  public neighborhood: string

  @column()
  public city: string

  @column()
  public state: string

  @column.dateTime()
  public canceled_at: DateTime

  @column()
  public signature: string

  @column.dateTime()
  public start_date: DateTime

  @column.dateTime()
  public end_date: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static assignUuid(delivery: Delivery) {
    delivery.id = uuid()
  }
}

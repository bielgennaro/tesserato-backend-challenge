/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async create({ request, response }: HttpContextContract) {
    const data = request.body()

    const user = await User.create(data)
    return response.status(200).json(user)
  }
  public async list({ response, request }: HttpContextContract) {
    const data = request.all()
    return response.status(200).json(data)
  }
}

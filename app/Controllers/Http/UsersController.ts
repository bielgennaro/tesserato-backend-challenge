/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async create({ request, response }: HttpContextContract) {
    const { id, name, isEnabled, companyId} = request.body()
    
    //! como eu vou consertar essa coisa...
    const user = await User.create({ id, name, isEnabled, companyId})
    return response.status(200).json(user)
  }
  public async list({ response, params }: HttpContextContract) {
    const users = await User.find(params.id)
    return response.status(200).json(users)
  }
}

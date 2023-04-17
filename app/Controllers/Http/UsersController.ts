import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async create({ request }: HttpContextContract) {
    const { name, isEnabled, companyId } = request.all()

    const company = await User.create({ name, isEnabled, companyId })
    return company
  }
  public async update() {
    const all = await User.all()
    return all
  }
}

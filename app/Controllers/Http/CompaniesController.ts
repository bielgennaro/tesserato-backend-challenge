import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company'

export default class CompaniesController {
  public async create({ request }: HttpContextContract) {
    const { name, isEnabled } = request.all()

    const company = await Company.create({ name, isEnabled })
    return company
  }
  public async update() {
    const all = await Company.all()
    return all
  }
}

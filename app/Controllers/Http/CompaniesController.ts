/* eslint-disable prettier/prettier */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company'
import User from 'App/Models/User'

export default class CompanyController {
  public async list({ response }: HttpContextContract) {
    const companies = await Company.all()
    return response.status(200).json(companies)
  }

  public async create({ request, response }: HttpContextContract) {
    const { name, users } = request.only(['name', 'users'])
    const company = new Company()
    company.name = name
    await company.save()

    if (users && users.length > 0) {
      const associatedUsers = await User.query().whereIn('id', users)
      await company.related('users').createMany(associatedUsers)
    }

    return response.status(201).json(company)
  }
}

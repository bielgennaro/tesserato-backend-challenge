/* eslint-disable prettier/prettier */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company'
import User from 'App/Models/User'

export default class CompanyController {
  public async create({ request, response }: HttpContextContract) {
    const { id, name, isEnabled} = request.body()

    const companies = await User.create({ id, name, isEnabled})
    return response.status(200).json(companies)
  }

  public async list({ response, params }: HttpContextContract) {
    const companies = await Company.find(params.id)
    return response.status(201).json(companies)
  }
}

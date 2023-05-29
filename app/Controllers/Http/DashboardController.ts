import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company'
import User from 'App/Models/User'

export default class DashboardController {
  public async list_companies({ response, request, params }: HttpContextContract) {
    const companies = await Company.find(params.id, request.body())
    const companyEmployers = JSON.parse(JSON.stringify(User))
    return response.status(201).json({ companies, companyEmployers })
  }
  public async order_by({ response, params }: HttpContextContract) {
    User.query().orderBy(params.id, 'asc')
    return response.status(201).json({ message: 'Ordenado com sucesso' })
  }
}

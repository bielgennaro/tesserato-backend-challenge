/* eslint-disable prettier/prettier */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company'
import User from 'App/Models/User'

export default class CompanyController {
  public async create({ request, response }: HttpContextContract) {
    const { id, name, isEnabled } = request.body()

    const companies = await User.create({ id, name, isEnabled })
    return response.status(200).json(companies)
  }

  public async list({ response, params }: HttpContextContract) {
    const companies = await Company.find(params.id)
    return response.status(201).json(companies)
  }
  public async update({ request, params, response }: HttpContextContract) {
    const { id } = params
    const { name, companyId } = request.body()

    try {
      const company = await User.findOrFail(id)

      company.name = name
      await company.save()

      await company.related('users').sync(companyId)

      return response.status(200).json({ message: 'Empresa atualizado com sucesso' })
    } catch (error) {
      return response.status(400).json({ error: 'Erro ao atualizar a empresa' })
    }
  }
  public async enableOrDisable({ params }: HttpContextContract) {
    const { id } = params

    const companies = await User.findOrFail(id)
    const linkedUsers = await User.query().where('companies_id', companies.id)
    const newStatus = !companies.isEnabled

    companies.isEnabled = newStatus
    await companies.save()

    linkedUsers.forEach(async (user: User) => {
      user.isEnabled = newStatus
      await user.save()
    })

    return { message: 'Status de usuários atualizado com sucesso.' }
  }
}

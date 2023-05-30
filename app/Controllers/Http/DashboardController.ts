import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company'
import User from 'App/Models/User'

export default class DashboardController {
  public async listCompanies({ response }: HttpContextContract) {
    try {
      const companies = await Company.query()
        .preload('users')
        .orderBy('name', 'asc')
        .withCount('users')

      return response.ok(companies)
    } catch (error) {
      return response.badRequest({ message: 'Falha ao buscar empresas' })
    }
  }

  public async listCompaniesWithUsers({ response }: HttpContextContract) {
    try {
      const companies = await Company.query().preload('users').orderBy('name', 'asc')

      return response.ok(companies)
    } catch (error) {
      return response.badRequest({ message: 'Falha ao buscar empresas com usuários' })
    }
  }

  public async listCompaniesOrderedByName({ request, response }: HttpContextContract) {
    try {
      const { order } = request.qs()

      const companies = await Company.query()
        .preload('users')
        .orderBy('name', order === 'desc' ? 'desc' : 'asc')

      return response.ok(companies)
    } catch (error) {
      return response.badRequest({ message: 'Falha ao buscar empresas pelo nome' })
    }
  }

  public async listCompaniesOrderedByUserCount({ request, response }: HttpContextContract) {
    try {
      const { order } = request.qs()

      const companies = await Company.query()
        .preload('users')
        .orderBy('users_count', order === 'desc' ? 'desc' : 'asc')

      return response.ok(companies)
    } catch (error) {
      return response.badRequest({
        message: 'Falha ao buscar empresas ordenadas por contagem de usuários',
      })
    }
  }

  public async listUsers({ response }: HttpContextContract) {
    try {
      const users = await User.query().preload('users').orderBy('name', 'asc')

      return response.ok(users)
    } catch (error) {
      return response.badRequest({ message: 'Falha na listagem de usuários' })
    }
  }

  public async listUsersOrderedByName({ request, response }: HttpContextContract) {
    try {
      const { order } = request.qs()

      const users = await User.query()
        .preload('users')
        .orderBy('name', order === 'desc' ? 'desc' : 'asc')

      return response.ok(users)
    } catch (error) {
      return response.badRequest({ message: 'Falha ao buscar usuários por nome' })
    }
  }
}

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
    const { name, users } = request.body()

    try {
      const user = await User.findOrFail(id)

      user.name = name
      await user.save()

      await user.related('users').sync(users)

      return response.status(200).json({ message: 'Usuário atualizado com sucesso' })
    } catch (error) {
      return response.status(400).json({ error: 'Erro ao atualizar o usuário' })
    }
  }
  public async enableOrDisable({ params }: HttpContextContract) {
    const { id } = params

    const mainUser = await User.findOrFail(id)
    const linkedUsers = await User.query().where('main_user_id', mainUser.id)
    const newStatus = !mainUser.isEnabled

    mainUser.isEnabled = newStatus
    await mainUser.save()

    linkedUsers.forEach(async (user: User) => {
      user.isEnabled = newStatus
      await user.save()
    })

    return { message: 'Status de usuários atualizado com sucesso.' }
  }
}

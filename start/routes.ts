/* eslint-disable prettier/prettier */
import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy ? response.ok(report) : response.badRequest(report)
})

Route.group(() => {
  Route.post('/register-company', 'CompaniesController.create')
  Route.get('/companies', 'CompaniesController.list')
}).prefix('/api')

Route.group(() => {
  Route.post('/register-user', 'UsersController.create')
  Route.get('/users', 'UsersController.list')
}).prefix('/api')

Route.put('/update/:id', async ({ params, request, response }) => {
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
})

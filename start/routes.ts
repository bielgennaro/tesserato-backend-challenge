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
  Route.put('enable_or_disable/:id', 'UserController.enableOrDisable')
  Route.put('/update/:id', 'UserController.update')
}).prefix('/tsrt')

Route.group(() => {
  Route.post('/register-user', 'UsersController.create')
  Route.get('/users', 'UsersController.list')
}).prefix('/tsrt')

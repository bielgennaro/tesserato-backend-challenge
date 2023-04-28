import Route from '@ioc:Adonis/Core/Route'

import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy ? response.ok(report) : response.badRequest(report)
})

Route.group(() => {
  Route.post('/companies', 'CompaniesController.create')
  Route.get('/companies', 'CompaniesController.list')
}).prefix('api')

Route.group(() => {
  Route.post('/users', 'UsersController.create')
  Route.get('/users', 'UsersController.list')
}).prefix('api')

/* eslint-disable prettier/prettier */
import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy ? response.ok(report) : response.badRequest(report)
})

Route.group(() => {
  Route.post('/register-company', 'CompaniesController.create')
  Route.get('/list', 'CompaniesController.list')
  Route.put('enable_or_disable/:id', 'CompaniesController.enableOrDisable')
  Route.put('/update/:id', 'CompaniesController.update')
  Route.delete('/delete/:id', 'CompaniesController.delete')
}).prefix('company')

Route.group(() => {
  Route.post('/register-user', 'UsersController.create')
  Route.get('/list', 'UsersController.list')
  Route.put('/update/:id', 'UsersController.update')
  Route.delete('/delete/:id', 'UsersController.delete')
}).prefix('users')

Route.group(() => {
  Route.get('/dashboard/companies', 'DashboardController.listCompanies')
  Route.get('/dashboard/companies-with-users', 'DashboardController.listCompaniesWithUsers')
  Route.get(
    '/dashboard/companies-ordered-by-name',
    'DashboardController.listCompaniesOrderedByName',
  )
  Route.get(
    '/dashboard/companies-ordered-by-user-count',
    'DashboardController.listCompaniesOrderedByUserCount',
  )
}).prefix('dashboard')

Route.group(() => {
  Route.get('/users', 'DashboardController.listUsers')
  Route.get('/users-ordered-by-name', 'DashboardController.listUsersOrderedByName')
}).prefix('dashboard/users')

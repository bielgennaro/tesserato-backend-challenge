import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('companies', 'CompaniesController.create')
  Route.get('companies', 'CompaniesController.list')
}).prefix('api')

Route.group(() => {
  Route.post('users', 'UsersController.create')
  Route.get('users', 'UsersController.list')
}).prefix('api')

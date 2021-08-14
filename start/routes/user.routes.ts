import Route from '@ioc:Adonis/Core/Route'

Route.post('/users', 'UsersController.create')
Route.put('/users', 'UsersController.update').middleware('auth')

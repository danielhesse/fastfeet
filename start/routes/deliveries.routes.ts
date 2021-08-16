import Route from '@ioc:Adonis/Core/Route'

Route.post('/deliveries', 'DeliveriesController.create').middleware('auth')
Route.get('/deliveries', 'DeliveriesController.index').middleware('auth')
Route.put('/deliveries/:delivery_id', 'DeliveriesController.update').middleware(
  'auth'
)

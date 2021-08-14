import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async create({ request, response }: HttpContextContract) {
    const { name, email, cpf, password, deliveryman } = request.body()

    const userAlreadyExists = await User.findBy('email', email)

    if (userAlreadyExists) {
      return response.status(400).json({ message: 'User already exists!' })
    }

    const user = await User.create({
      name,
      email,
      cpf,
      password,
      deliveryman,
    })

    return user
  }
}

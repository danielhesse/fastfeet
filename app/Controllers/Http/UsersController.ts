import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async create({ request, response }: HttpContextContract) {
    const { name, email, cpf, password, deliveryman } = request.body()

    const userAlreadyExists = await User.findBy('email', email)

    if (userAlreadyExists) {
      return response.badRequest({ message: 'User already exists!' })
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

  public async update({ request, response }: HttpContextContract) {
    const { name, email, cpf, password, deliveryman } = request.body()

    const checkUserExists = await User.findBy('email', email)

    if (!checkUserExists) {
      return response.badRequest({ message: 'User does not exists!' })
    }

    const user = checkUserExists

    user.name = name
    user.email = email
    user.cpf = cpf
    user.password = password
    user.deliveryman = deliveryman

    await user.save()

    return user
  }
}

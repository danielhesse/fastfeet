import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'

export default class SessionsController {
  public async create({ request, response, auth }: HttpContextContract) {
    const { email, password } = request.body()

    const userExists = await User.findBy('email', email)

    if (!userExists) {
      return response.badRequest({ message: 'Invalid credentials' })
    }

    const user = userExists

    // Vefiry password
    const passwordMatched = await Hash.verify(user.password, password)

    if (!passwordMatched) {
      return response.badRequest({ message: 'Invalid credentials' })
    }

    // Generate token
    const token = await auth.use('api').generate(user, {
      expiresIn: '15mins',
    })

    return token
  }
}

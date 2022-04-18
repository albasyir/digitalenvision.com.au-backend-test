import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserValidation from 'App/Validations/UserValidation'

/**
 * A class to handle the users
 *
 * @class UsersController
 */
export default class UsersController {
  /**
   * Show all users
   *
   * @returns {Promise<void>}
   */
  public async index({ response }: HttpContextContract): Promise<void> {
    return response.ok(User.all())
  }

  /**
   * Create a new user
   *
   * @param httpContract
   * @returns {Promise<void>}
   */
  public async create({ request, response }: HttpContextContract): Promise<void> {
    let data = await request.validate({ schema: UserValidation })
    let newUser = User.create(data)

    return response.created(newUser)
  }

  public async update({ request, response }: HttpContextContract) {
    let data = await request.validate({ schema: UserValidation })

    let user = await User.findOrFail(request.params.id)

    user.merge(data)
    await user.save()

    return response.created({ user })
  }

  public async destroy({ response, auth }: HttpContextContract) {
    await auth.user.delete()

    return response.noContent()
  }
}

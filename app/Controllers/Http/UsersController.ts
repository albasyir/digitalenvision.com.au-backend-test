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
  public async store({ request, response }: HttpContextContract): Promise<void> {
    let data = await request.validate({ schema: UserValidation })
    let user = await User.create(data)

    return response.created(user)
  }

  public async update({ request, response }: HttpContextContract): Promise<void> {
    let newUpdate = await request.validate({ schema: UserValidation })
    let user = await User.findOrFail(request.params().id)

    user.merge(newUpdate)
    await user.save()

    if (user.$isNew) return response.created(user)

    return response.accepted(user)
  }

  public async destroy({ response, request }: HttpContextContract) {
    let user = await User.findOrFail(request.params().id)

    user.delete()

    return response.noContent()
  }
}

import { HttpContext } from '@adonisjs/core/build/standalone'
import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import CreateUserService from 'App/Services/User/CreateUserService'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
  }

  public async boot() {
    // bootstrap your application here.
  }

  public async ready() {
    // Ready to serve requests
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}

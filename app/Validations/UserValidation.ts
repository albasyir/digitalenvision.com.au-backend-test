import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default schema.create({
  first_name: schema.string(),
  last_name: schema.string(),
  birth_day: schema.date(),
  birth_timezone: schema.string(),
})

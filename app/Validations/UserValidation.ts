import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default schema.create({
  first_name: schema.string([rules.required()]),
  last_name: schema.string([rules.required()]),
  birth_day: schema.date([rules.required()]),
  birth_place: schema.string([rules.required()]),
})

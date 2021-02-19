const Joi = require('joi');
const MidException = require('../../utils/MidException');
const knex = require('../knex');

class Employee {
  constructor() {
    this.createSchema = Joi.object({
      name: Joi.string().required(),
      date_of_joining: Joi.date().required(),
      department: Joi.string().required(),
      salary: Joi.number().required()
    })

    this.updateSchema = Joi.object({
      name: Joi.string(),
      date_of_joining: Joi.date(),
      department: Joi.string(),
      salary: Joi.number()
    })
  }

  async findAll() {
    return knex.select('*').from('employees');
  }

  async destroy(id) {
    const isDeleted =  await knex('employees').del().where({id});
    console.log(isDeleted);
    if(!isDeleted)
      throw new MidException('common.notFound');
    return null;
  }

  async update(payload, id) {
    const item = await knex('employees').select('*').where({id});
    if (!item.length)
      throw new MidException('common.notFound');
    const {error} = await this.updateSchema.validate(payload);
    if (error)
      throw new MidException('common.validationError', error)
    await knex('employees').update(payload).where({id})
    return {id, ...payload};
  }

  findById(id) {
    return knex.select('*').from('employees').where({id: id});
  }

  async create(payload) {
    const {error} = await this.createSchema.validate(payload);
    if (error)
      throw new MidException('common.validationError', error)
    const [id] = await knex('employees').insert(payload);
    return {id, ...payload};

  }
}

module.exports = new Employee();
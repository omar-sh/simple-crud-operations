const Employee = require('../database/models/employee');

class EmployeeController {

  async create(req, res, next) {
    try {
      return res.send({data: await Employee.create(req.body)});
    } catch (error) {
      return next(error);
    }
  }

  async findAll(req, res, next) {
    try {
      return res.send({data: await Employee.findAll()});
    } catch (error) {
      return next(error);
    }
  }

  async findById(req, res, next) {
    try {
      return res.send({data: await Employee.findById(req.params.id)});
    } catch (error) {
      return next(error);
    }
  }

  async update(req, res, next) {
    try {
      return res.send({data: await Employee.update(req.body, req.params.id)});
    } catch (error) {
      return next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await Employee.destroy(req.params.id);
      res.send(null);
    } catch (error) {
      return next(error);
    }
  }


}

module.exports = new EmployeeController();
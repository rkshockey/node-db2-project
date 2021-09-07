const { getByVin, getById } = require('./cars-model')
const carSchema = require('../../carSchema')
const vinValidator = require('vin-validator')

const checkCarId = async (req, res, next) => {
  try{
    const car = await getById(req.params.id);
    if (car) {
      req.car = car;
      next()
    }else{
      next({ status: 404, message: `car with id ${req.params.id} is not found` })
    }
  } catch (err){
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  carSchema.validate(req.body)
    .then(() => next())
    .catch(err => next({ status: 400, message: err.errors[0]}))
}

const checkVinNumberValid = (req, res, next) => {
  const { vin } = req.body
  const valid = vinValidator.validate(vin)
  if (valid){
    next()
  }else{
    next({ status: 400, message: `vin ${vin} is invalid`})
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const { vin } = req.body
    const repeat = await getByVin(vin)
    if (repeat) {
      next({ status: 400, message: `vin ${vin} already exists`})
    }else{
      next()
    }
  } catch (err) {
    next({ status: 500, message: err })
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}

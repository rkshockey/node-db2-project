const { getById } = require('./cars-model')

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
  console.log('checkCarPayload wired')
  next()
}

const checkVinNumberValid = (req, res, next) => {
  console.log('checkVinNumberValid wired')
  next()
}

const checkVinNumberUnique = (req, res, next) => {
  console.log('checkVinNumberUnique wired')
  next()
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
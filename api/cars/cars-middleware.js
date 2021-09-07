const checkCarId = (req, res, next) => {
  console.log('checkCarId wired')
  next()
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
const mapValues = require('lodash/mapValues')
const Validators = require('./Validators')
const createSuperValidator = require('./createSuperValidator')

const DataGuard = mapValues(Validators, (validator, name) => (...args) => createSuperValidator()[name](...args))

module.exports = DataGuard

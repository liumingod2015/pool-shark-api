'use strict'

const config = require('../config/main')
const contractHelper = require('./contract/helper')
const ContractType = require('./contract/Types')

async function init () {
  try {
    await contractHelper.addContract(config.app_contract_address, ContractType.App, 0)
    return 'Data initialized successfully!'
  } catch (err) {
    throw err
  }
}

module.exports = {
  init
}

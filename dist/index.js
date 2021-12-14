
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./golswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./golswap-sdk.cjs.development.js')
}


'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./bigswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./bigswap-sdk.cjs.development.js')
}

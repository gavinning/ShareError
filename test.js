const ShareError = require('./ShareError')

const err100 = new ShareError('100', 'error code 100')
const err200 = new ShareError(200, 'error code 200')
const err300 = new ShareError(300, 'error code 300')

console.log(err100)
console.log(err200)
console.log(err300)

class ShareError extends Error {
    constructor(code, message) {
        super()

        if ('number' !== typeof code) {
            throw Error(`ShareError code must be a number`)
        }

        this.code = code

        if ('string' === typeof message) {
            this.message = message
        }
        else if (message instanceof Error) {
            let err = message
            this.stack = err.stack
            this.message = err.message
        }
    }
}

module.exports = ShareError

const lang = require('./lang.js');
module.exports = class ResponseError {
    message;
    code;

    constructor(code, responseError) {
        this.code = code;
        switch (code) {
            case 500:
                this.message = lang[process.env.LANGUAGE].responseError[500];
                break;
            case 503:
                this.message = lang[process.env.LANGUAGE].responseError[503];
                break;
            case 429:
                this.message = lang[process.env.LANGUAGE].responseError[429];
                break;
            default:
                this.message = lang[process.env.LANGUAGE].responseError.default + responseError;
                break;
        }
    }
};

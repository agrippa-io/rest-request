"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleSuccess(response) {
    return response;
}
function handleError(error) {
    return error.response;
}
exports.default = {
    handleSuccess,
    handleError,
};
//# sourceMappingURL=response.errorMessageAsReponse.js.map
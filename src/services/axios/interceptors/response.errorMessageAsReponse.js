function handleSuccess(response) {
  return response
}

function handleError(error) {
  return error.response
}
export default {
  handleSuccess,
  handleError,
}

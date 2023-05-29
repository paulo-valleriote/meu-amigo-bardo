'use strict'

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Yout function executed sucessfully!',
        input: event,
      },
      null,
      2
    )
  }
}
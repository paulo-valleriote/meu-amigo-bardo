const middy = require('middy')

const bodyParserMiddy = require('../middys/BodyParser')
const apiResponseMiddy = require('../middys/ApiResponse')

const getAction = ({actionName}) => {
  const action = require(`../Actions/${actionName}`)

  return action
}

const Orchestrator = async (event, context, cb) => {
  const {queryResult} = event.body

  const payload = {
    action: queryResult.action,
    params: queryResult.parameters
  }

  const action = await getAction({ actionName: payload.action })
  const messages = await action.run({ payload })

  const responseDialog = {
    fulfillmentMessages: [...messages.map(message => ({text: {text: [message]}}))]
  }

  cb(null, {
    statusCode: 200,
    data: responseDialog
  })
}


module.exports.orchestrator = middy(Orchestrator)
.use(bodyParserMiddy())
.use(apiResponseMiddy())
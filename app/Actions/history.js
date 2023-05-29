const generateHistory = require("../lib/generate")

const historyAction = async ({subject}) => {
  const history = await generateHistory(subject)

  return [history]
}

module.exports.run = async ({ payload }) => {
  const { subject } = payload.params

  const response = await historyAction({ subject: subject.name })
  
  return response
} 
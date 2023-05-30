
const attributesAction = async () => {
  const attributes = []

  const rollDice = () => Math.ceil(Math.random() * 6) + 1

  for (i = 0; i < 6; i++) {
    const rolledDices = []
    for (j = 0; j < 4; j++) {
      rolledDices.push(rollDice())
    }

    const smallestValueIndex = rolledDices.indexOf(Math.min(rolledDices))
    rolledDices.splice(smallestValueIndex, 1)
    const finalValue = rolledDices.reduce((previousRoll, currentRoll) => previousRoll+currentRoll)

    attributes.push(finalValue)
  }

  return [`Seus atributos são: ${attributes.join(' - ')}`]
}

module.exports.run = async () => {
  const response = await attributesAction()

  return response
} 
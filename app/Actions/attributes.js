
const attributesAction = async () => {
  const attributes = []

  const rollDice = () => Math.floor(Math.random() * 6) + 1

  for (i = 0; i < 6; i++) {
    const rolledDices = []
    for (j = 0; j <= 4; j++) {
      rolledDices.push(rollDice())
    }

    const smallestValueIndex = rolledDices.indexOf(Math.min(rolledDices))
    const finalValue = rolledDices.reduce((previousDice, currentDice, index) => index !== smallestValueIndex && previousDice + currentDice)

    attributes.push(finalValue)
  }

  return [`Seus atributos são: ${attributes.join(' - ')}`]
}

module.exports.run = async () => {
  const response = await attributesAction()

  return response
} 
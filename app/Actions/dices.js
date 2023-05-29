
const diceAction = async ({dicesToRoll, diceValue, modificator}) => {
  const randomResult = () => Math.floor(Math.random() * diceValue) + 1;

  const requestRolls = []

  for (let i = 0; i < dicesToRoll; i++ ) {
    requestRolls.push(randomResult() + modificator)
  }
  
  const message = dicesToRoll > 1 ? `O resultado das suas rolagens foram ${requestRolls.join(',')}` 
  : `O resultado da sua rolagem foi d${diceValue}${modificator !== 0 ? " + "+modificator : ''} = ${requestRolls[0]}`

  return [message]
}

module.exports.run = async ({ payload }) => {
  const { dicesToRoll, dice, modificator } = payload.params

  const formatedDiceValue = Number(dice.slice(1, dice.length))
  const response = await diceAction({ dicesToRoll: Number(dicesToRoll), diceValue: formatedDiceValue, modificator: Number(modificator) })

  return response
} 

const diceAction = async ({diceValue}) => {
  const randomResult = Math.floor(Math.random() * diceValue) + 1;
  
  return [`O resultado da sua rolagem foi ${randomResult}`]
}

module.exports.run = async ({ payload }) => {
  const { dice } = payload.params

  const formatedDiceValue = Number(dice.slice(1, dice.length))
  const response = await diceAction({ diceValue: formatedDiceValue })

  return response
} 
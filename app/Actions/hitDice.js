const hitDiceAction = async ({ desiredClass }) => {
  const hitDiceLibrary = {
    "Barbarian": 12,
    "Ranger": 10,
    "Warrior": 10,
    "Paladin": 10,
    "Bard": 8, 
    "Warlock": 8, 
    "Cleric": 8,
    "Druid": 8,
    "Rogue": 8, 
    "Monk": 8,
    "Sorcerer":6,
    "Wizard": 6,
    "Bárbaro": 12,
    "Patrulheiro": 10,
    "Guerreiro": 10,
    "Paladino": 10,
    "Bardo": 8, 
    "Bruxo": 8, 
    "Clérigo": 8,
    "Druida": 8,
    "Ladino": 8, 
    "Monge": 8,
    "Feiticeiro":6,
    "Mago": 6,
  }
  
  const diceValue = hitDiceLibrary[desiredClass]

  const randomLife = () => Math.floor(Math.random() * diceValue) + 1;

  const message = `O dado de vida da classe escolhida é d${diceValue}, caso você esteja no nível um, seus pontos de vida serão:\n\n ${diceValue} + Seu valor de Constituição \n
Caso seja posterior ao nível 1º você terá: \n
um d${diceValue} = +${randomLife()} pontos de vida`

  return [message.trim()]
}

module.exports.run = async ({ payload }) => {
  const { desiredClass } = payload.params

  const response = await hitDiceAction({desiredClass})

  return response
} 
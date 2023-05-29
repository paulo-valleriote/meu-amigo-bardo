const {Configuration, OpenAIApi} = require('openai')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

async function generateHistory (prompt) {
  try {
    if (!configuration.apiKey) {
      throw new Error("OpenAI API key not configured, please follow instructions in README.md")
    }

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(prompt),
      temperature: 0.6,
    });

    return completion
  } catch(error) {
    console.log(error)
    return 'Instabilidade no trama! Impossível gerar uma resposta'
  }
}

function generatePrompt(prompt) {
  return `Escreva uma descrição de até 2 linhas sobre ${prompt}`
}

module.exports = generateHistory
# Amigo Bardo  

## Chatbot

Um projeto de Chatbot construído com Serverless, Dialogflow e JavaScript. (Projeto com fins acadêmicos)

_____

### Objetivo

Trazer funcionalidades que jogadores de rpg normalmente utilizam algum site na internet para usar para um bot no telegram, facilitando o acesso e deixando a necessidade a algumas mensagens de distância

### Funcionalidades Atuais

Atualmente é possível utilizar o bot para:

- Pedir rolagens de dados e receber um resultado aleatório baseado em:
  - Número de dados
  - Quantidade de lados do dado
  - Modificador que deve ser aplicado
- Consultar como funcionam os pontos de vida de determinada classe
- Gerar os 6 atributos para o jogador ( No modelo 4d6, retirando o menor resultado )

### Funcionalidades ainda não implementadas

Algumas coisas podem vir a incrementar este pequeno projeto no futuro, sendo elas:

- Consultas mais complexas
  - Equipamentos, armas e armaduras
  - Classes e Raças
- Geração de atributos baseada em classe ( Quais devem ser os maiores )
- Ajuda com criação de histórias

_____

### Para iniciar a aplicação

Você <b>DEVE</b> ter o [Serverless](https://www.serverless.com/framework#monitoring) e o [Node.js](https://nodejs.org/en) instalados na sua máquina.

Tendo os dois requisitos <b>obrigatórios</b>, agora você precisa instalar as dependências com:

    npm install ou yarn install

Em seguida você já pode iniciar a aplicação com:

    serverless offline

_____

### Exemplos

#### Uma rolagem

                                                            "Role um dado"
    "Qual dado?"
                                                                     "d20"
    "O resultado da sua rolagem foi d20 = 12"

#### Uma rolagem com modificador

                                                            "Role um dado"
    "Qual dado?"
                                                                 "d20 + 8"
    "O resultado da sua rolagem foi d20 + 8 = 14"

#### Duas rolagens

                                                            "Role um dado"
    "Qual dado?"
                                                                "Dois d20"
    "O resultado das suas rolagens foram 8, 12"

#### Gerar atributos

                                                      "Gere meus atributos"

    "Seus atributos são: 20 - 17 - 16 - 16 - 13 - 17"

#### Pontos de vida

                                        "Quais os pontos de vida do bardo?"

    "O dado de vida da classe escolhida é d8, caso você
    esteja no nível um, seus pontos de vida serão:
    
    8 + Seu valor de Constituição 

    Caso seja posterior ao nível 1º você terá: 

    um d8 = +4 pontos de vida

_____

### Obrigado por ler até aqui!

#### Projeto realizado por [Paulo Valleriote](https://www.linkedin.com/in/paulovalleriote/)


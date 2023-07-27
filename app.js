const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config(); // Load environment variables from .env


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function fetchFactAnswer() {
  const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `List some great books to read on the topic of coding.`,
      max_tokens: 400,
      stop: ['2.']
  }) 
    // console.log(response.data)
    console.log(response.data.choices[0].text)
} 

fetchFactAnswer()


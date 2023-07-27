import { Configuration, OpenAIApi } from 'openai';
import { process } from './env';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function fetchFactAnswer() {
  const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `List some great books to read on the topic of coding.`,
      max_tokens: 400,
      stop: ['\n']
  }) 
    console.log(response.data.choices[0].text)
} 

fetchFactAnswer()
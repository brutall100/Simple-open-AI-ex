const express = require('express');
const app = express();
const path = require('path'); // We'll use the 'path' module to work with file paths

const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function fetchFactAnswer() {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `List some great books to read. `,
    max_tokens: 400,
    // stop: ['.2']
  });
  return response.data.choices[0].text;
}

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  // Serve the index.html file when accessing the root URL
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/getBooks', async (req, res) => {
    try {
      const booksString = await fetchFactAnswer();
      const booksArray = booksString.split('\n').filter(book => book.trim() !== ''); // Split and remove empty lines
      res.json({ books: booksArray });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch books.' });
    }
  });
  

const PORT = 6500; // You can use any port number you prefer
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

















// const { Configuration, OpenAIApi } = require('openai');
// require('dotenv').config(); // Load environment variables from .env


// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// async function fetchFactAnswer() {
//   const response = await openai.createCompletion({
//       model: 'text-davinci-003',
//       prompt: `List some great books to read. `,
//       max_tokens: 400,
//       stop: ['.2']
//   }) 
//     // console.log(response.data)
//     console.log(response.data.choices[0].text)
// } 

// fetchFactAnswer()


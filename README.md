# Simple OpenAI API Example

This is a simple web application that demonstrates how to use the OpenAI API to fetch a list of great books to read. The server is built using Node.js with Express.js, and the client-side uses vanilla JavaScript to display the fetched book list.

## Prerequisites

Before running this project, you'll need the following:

- Node.js (v18.13.0 or higher)
- OpenAI API Key (You can get one from the OpenAI website)

- npm install openai dotenv express

## Installation

1. Clone the repository:

git clone https://github.com/brutall100/simpleOPEN_AI_ex.git


2. Navigate to the project directory:

cd simpleOPEN_AI_ex

3. Install the dependencies:

npm install openai dotenv express

4. Set up the OpenAI API Key:

   - Rename the `.env.example` file to `.env`.
   - Replace `YOUR_OPENAI_API_KEY` with your actual OpenAI API Key in the `.env` file.

## Usage

1. Start the server:

node server.js

2. Open your web browser and navigate to `http://localhost:6500`.

The web page will display a list of great books to read fetched from the OpenAI API.

## Contributing

Contributions are welcome! If you have any improvements or bug fixes, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This project uses the OpenAI API to fetch book information.
- Special thanks to OpenAI for providing the API service.

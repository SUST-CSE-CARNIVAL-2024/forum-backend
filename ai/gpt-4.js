const openai = require('openai').OpenAI;
const dotenv = require("dotenv");
dotenv.config();

const client = new openai(process.env.OPENAI_API_KEY);

module.exports = {
    client
}
const dotenv = require('dotenv');
const {Configuration, OpenAIApi} = require('openai');
dotenv.config();

const API_KEY = process.env.OPENAI_API_KEY;

if (!API_KEY){
    console.error('API key is not set.');
    process.exit(1);
};
  
const configuration = new Configuration({
    apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);
  
export default openai;
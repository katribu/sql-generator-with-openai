import express from 'express'
import cors from 'cors'
const app = express()
import generateSql from './function.js';

app.use(express.json());
app.use(cors());
const PORT = 3005;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/generate-sql', async (req,res) => {
const {query} = req.body

try{
  const result = await generateSql(query)
  res.json({result})

}catch(err){
  console.error(err)
}
})

app.listen(PORT, console.log(`App listening on port ${PORT}`))


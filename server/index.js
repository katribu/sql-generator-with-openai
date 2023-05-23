const express = require('express')
const cors = require('cors')
const app = express()


app.use(express.json());
app.use(cors());
const PORT = 3005;

app.get('/', function (req, res) {
  res.send('Hello World')
})



app.listen(PORT, console.log(`App listening on port ${PORT}`))


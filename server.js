const express = require('express')
const app = express()
const port = 3000
app.listen(3000, () => console.log("keraa tietoa"));
app.use(express.static("public"));

console.log("tacobell")

const pankki = [
{

"nimi": "alexa huumeet",
"pingviini": "1111"


},
{
  "Nimi": "alexa epic",
  "pingviini":"9812"

}

]

app.get('/buffbank', function (req, res) {
  res.send(pankki)
})

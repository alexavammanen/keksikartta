const express = require('express')
const app = express()
//app.listen(3000, () => console.log("keraa tietoa"));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("kuuntelen porttia " + port));

app.use(express.static("public"));

app.use(express.json({limit: '1mb'}));


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

const paikkatiedot = [
{
"latitude": "61",
"longitude": "23",
"orja": "ööööö",
"arvostelu": "ok",
"arvostelija": "henkilö"
}
]

app.get('/haeviaerailut', function (req, res) {
  res.send('paikkatiedot')
})


app.get('/buffbank', function (req, res) {
  res.send('pankki')
})

app.post('/buffbank', function (req, res) {
pankki.push(req.body);
console.log(pankki);
  res.send(200);
})

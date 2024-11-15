const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(cors());
function genrateRandomID(){
  let ID=''
  let numStr = "0123456789";
  let charStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  ID += charStr.charAt(Math.random()*charStr.length);
  for(let i = 0;i < 9;i++){
    ID += numStr.charAt(Math.random()*numStr.length);
  }
  return ID
}
const greetings = {
    English : {
      msgText : "Hello world"
    },
    French : {
      msgText : "Bonjour le monde"
    },
    Hindi : {
      msgText : "Namastey sansar"

    }
};

app.get('/hello', (req, res) => {
  const lang = req.query.language;
  if(!lang || !(Object.keys(greetings).includes(lang))){
    return res.status(400).json({error_message:"The requested language is not supported"});
  }
  let ID = genrateRandomID();
  greetings[lang].ID = ID;
  res.status(200).json({ message:greetings[lang]});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
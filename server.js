'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';
const bcrypt = require('bcrypt');

//START_ASYNC -do not remove notes, place code between correct pair of notes.

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  if (err) return console.error(err);

  console.log(hash); // acá verás el hash en consola

  // comparar contra el mismo texto (debería dar true)
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    if (err) return console.error(err);
    console.log(res); // true

    // Si querés probar el false, descomenta esto:
    // bcrypt.compare(someOtherPlaintextPassword, hash, (err, res2) => {
    //   if (err) return console.error(err);
    //   console.log(res2); // false
    // });
  });
});


//END_ASYNC

//START_SYNC



//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});

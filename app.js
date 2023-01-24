const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000; 

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.send('Hello World! This is Billy the Cat!')
})

app.get('/show', (req, res) => {

    res.sendFile('index.html' , { root : __dirname});

})
app.get('/ejs', (req, res) => {

    //yes
    res.render('index');

})
console.log('in the node console');

app.listen(PORT, () => {
    console.log(`Server is running & listening on port: ${PORT}`);
  });
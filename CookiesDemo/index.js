const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
    const { name = 'User' } = req.cookies;
    res.send(`Hey there ${name}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'tony tonedef');
    res.cookie('emo', 'mmmm fatha');
    res.send("OK, Sent You A Cookie!")
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true }) 
    res.send('its signed!')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies) 
    console.log(req.signedCookies) 
    res.send(req.signedCookies)
})


app.listen(3000, () => {
    console.log('App is running on Localhost:3000')
})
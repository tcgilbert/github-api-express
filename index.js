const express = require('express');
const axios = require('axios');

//create app
const app = express();

//template engine
app.set('view engine', 'ejs');

//routes
app.get('/', (req, res) => {
    axios.get('https://api.github.com/users/tcgilbert')
    .then(guthubRes => {
        const thomasObject = {
            login: guthubRes.data.login,
            url: guthubRes.data.html_url,
            name: guthubRes.data.name
        }
        console.log(thomasObject);
        res.send(thomasObject);
    });
});

app.get('/ashton', (req, res) => {
    axios.get('https://api.github.com/users/swolepenguin')
    .then(guthubRes => {
        const swoleObject = {
            login: guthubRes.data.login,
            url: guthubRes.data.html_url,
            name: guthubRes.data.name
        }
        console.log(swoleObject);
        res.send(swoleObject);
    });
});

app.get('/rome', (req, res) => {
    axios.get('https://api.github.com/users/romebell')
    .then(guthubRes => {
        const romeObject = {
            login: guthubRes.data.login,
            url: guthubRes.data.html_url,
            name: guthubRes.data.name
        }
        console.log(romeObject);
        res.send(romeObject);
    });
});

app.get('/nitish', (req, res) => {
    axios.get('https://api.github.com/users/nitishdayal')
    .then(guthubRes => {
        const nitishObject = {
            login: guthubRes.data.login,
            url: guthubRes.data.html_url,
            name: guthubRes.data.name
        }
        console.log(nitishObject);
        res.send(nitishObject);
    });
});

app.get('/paul', (req, res) => {
    axios.get('https://api.github.com/users/codebypaul')
    .then(guthubRes => {
        const paulObject = {
            login: guthubRes.data.login,
            url: guthubRes.data.html_url,
            name: guthubRes.data.name
        }
        console.log(paulObject);
        res.send(paulObject);
    });
});

//port setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`you be vibin on port ${PORT} 🔥`));
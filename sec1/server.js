const express = require('express');
const { nextTick } = require('process');
const path = require('path');
const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');
const app = express();
git 
const PORT = `3000`;
const HOST = 'localhost';
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'views'));
app.use(express.json());
app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.url}`)
    next();
    const diffTime = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${diffTime}ms`)
})

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.use('/static',express.static(path.join(__dirname,'public')));
app.get('/', (req, res) => {
    res.render('index', {
        imageTitle: "It is a road 2"
    })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}: ${PORT} `);
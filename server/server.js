import express from 'express'

const app = express();
const Port = 3000;

app.get('/', (req, res) => {
    res.write('hello workd');
    res.end();
})

app.listen(Port);
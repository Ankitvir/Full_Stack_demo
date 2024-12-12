import express from 'express';
import { title } from 'process';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// get a list of 5 jokes 


app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A Joke',
            content: 'This is a Joke'
        },
        {
            id: 2,
            title: 'A another Joke',
            content: 'This is a another Joke'
        },
        {
            id: 3,
            title: 'A one more another Joke',
            content: 'This is a one more  Joke'
        },
        {
            id: 4,
            title: 'A two another Joke',
            content: 'This is a two another  Joke'
        },
        {
            id: 5,
            title: 'A three another Joke',
            content: 'This is a three another  Joke'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
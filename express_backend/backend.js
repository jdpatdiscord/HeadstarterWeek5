const express = require('express');
const app = express();

import { Pinecone } from '@pinecone-database/pinecone';

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    const pc = new Pinecone({
        apiKey: '2410d519-630c-4d87-ad89-402277d7d27f'
    });

    console.log(`Server is running on 3000`);
});
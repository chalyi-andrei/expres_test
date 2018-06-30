const express = require('express');

const app = express();

const router = express.Router();


router.route('/')
    .get((req, res) => {
        res.send('products Get method');
    })
    .post((req, res) => {
        res.send('products post method')
    });

router.route('/:id')
    .get((req, res) => {
        res.send(`Get product: ${req.params.id}`);
    });

app.use('/products', router);

app.get('/', (req, res) => {
    res.send('Main page')
});

app.listen(8080);
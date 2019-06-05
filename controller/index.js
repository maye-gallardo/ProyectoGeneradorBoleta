var bodyParser = require('body-parser');
const express = require('express')
const app = express()
const router =  require('./router')

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.routes(app);

app.listen(3000, () => console.log('Server ready'))
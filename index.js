let path = require('path');
let express = require('express');
let mainRouter = require('./mainRouter.js');
let viewsRouter = require('./viewsRoutes.js');
let actionsRouter = require('./BookSiteActions.js');

let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mounting our routers
app.use('/',mainRouter);
app.use('/views',viewsRouter);
app.use('/actions',actionsRouter);

app.use('/cdn', express.static('json'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 3000);
console.log("Express server running on port 3000");
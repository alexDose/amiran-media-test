const jsonServer = require('json-server');
const fs = require("fs");
const path = require('path');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
    await new Promise(res => {
        setTimeout(res, 1000);
    });
    next();
});

server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users } = db;
    console.log(users)

    const userFromBd = users.find(user => user.username === username && user.password === password);
    if (userFromBd) {
        console.log(userFromBd)
        return res.json(userFromBd);
    }

    return res.status(403).json({ message: 'Auth error' });
});

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
server.use(router);

server.listen(8000, () => {
    console.log('JSON Server is running on 8000 port');
});

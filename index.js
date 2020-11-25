// start your server here
const server = require('./api/server.js');

const PORT = 3333;

server.listen(PORT, () => {
    console.log(`
        *** Hello :) I'm listening on port ${PORT} ***
    `)
})
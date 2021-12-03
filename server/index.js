const app = require('./app');
const PORT  = process.env.PORT || 4004;

app.listen(PORT, () => {
    try {
        console.log('Server has been started on port: ', PORT)
    } catch (e) {
        console.info(e.message)
    }
});
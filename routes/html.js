const path = require('path');
const router = require('express').Router();
// module.exports = (app) => {
//     // => HTML GET Requests
//     app.get('/', (req, res) => {
//         res.sendFile(path.join(__dirname, '../public/index.html'));
//     });

//     app.get('/exercise', (req, res) => {
//         res.sendFile(path.join(__dirname, '../public/exercise.html'));
//     });

//     app.get('/stats', (req, res) => {
//         res.sendFile(path.join(__dirname, '../public/stats.html'));
//     });
// }

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;
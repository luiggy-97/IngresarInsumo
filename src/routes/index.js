const {Router} = require('express');
const router = Router();
const admin = require('firebase-admin');

var serviceAccount = require("../../bd-desastres-firebase-adminsdk-b8g0p-91767c5f33.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:'https://bd-desastres.firebaseio.com/'
});

const db = admin.database();

router.get('/', (req, res) => {
    db.ref('users').once('value', (snapshot) => {
        const data = snapshot.val();
        res.render('index', {users:data});
    });
});

router.post('/new-user', (req, res) =>{
    console.log(req.body);
    const newUser = {
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        descripcion: req.body.descripcion,
    }
    db.ref('users').push(newUser);
    res.redirect('/');
});

router.get('/delete-user/:id', (req, res) => {
    db.ref('users/' + req.params.id).remove();
    res.redirect('/');
});

module.exports = router;
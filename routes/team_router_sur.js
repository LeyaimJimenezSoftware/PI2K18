const TeamControlerS = require('../controllers/team_controllerS'),
    express = require('express'),
    router = express.Router(),
    tc = new TeamControlerS(); //Instancia en la clase

router
    .get('/', tc.getAll)
    .get('/agregar', tc.addForm)
    .get('/editar/:noSucursal', tc.getOne)
    .post('/', tc.save)
    .put('/actualizar/:noSucursal', tc.save)
    .delete('/eliminar/:noSucursal', tc.delete)
    .use(tc.error404);

module.exports = router;
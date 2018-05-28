const conn = require('./model');

class TeamModel {

    getAll(cb) { 
        conn.query('SELECT * FROM autos', cb); 
    }

    getOne(noSerie, cb) {
        conn.query('SELECT * FROM autos WHERE noSerie = ?', noSerie, cb);
         
    }

    save(data, cb) {
        conn.query('SELECT * FROM autos WHERE noSerie = ?', data.noSerie, (err, rows) => {
            console.log(`Numero de registros ${rows.length}`);

            if (!err)
                return (rows.length == 1)
                    ? conn.query('UPDATE autos SET ? WHERE noSerie = ?', [data, data.noSerie], cb)
                    : conn.query('INSERT INTO autos SET ?', data,cb);
        });
    }
    


    delete(noSerie, cb) {
        conn.query('DELETE FROM autos WHERE noSerie = ?', noSerie, cb);
    }
}

module.exports = TeamModel;
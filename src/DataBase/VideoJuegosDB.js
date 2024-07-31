const path = require('path');

const db_file_path = path.join(__dirname, '../DataBase/VideoJuegos.json');


const ObtenerTodosLosVideoJuegos = () =>
    {
        try
        {
            let infoVideoJuego = require(db_file_path);
            return infoVideoJuego.VideoJuegos;
        }
        catch(error)
        {
            return error;
        }
    
}
module.exports = 
{
    ObtenerTodosLosVideoJuegos
}
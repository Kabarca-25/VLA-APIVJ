const path = require('path');

const db_file_path = path.join(__dirname, '../DataBase/Consoles.json');


const ObtenerTodasLasConsolas = () =>
    {
        try
        {
            let infoConsole = require(db_file_path);
            return infoConsole.Consoles;
        }
        catch(error)
        {
            return error;
        }
    
}
module.exports = 
{
    ObtenerTodasLasConsolas
}
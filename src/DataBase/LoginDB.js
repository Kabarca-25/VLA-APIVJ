const path = require('path');

const db_file_path = path.join(__dirname, '../DataBase/Login.json');


const ObtenerTodosUsers = () =>
    {
        try
        {
            let infoUser = require(db_file_path);
            return infoUser.Users;
        }
        catch(error)
        {
            return error;
        }
    
}
module.exports = 
{
    ObtenerTodosUsers
}
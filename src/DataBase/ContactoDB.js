
const fs = require('fs');
const path = require('path');


const db_file_path = path.join(__dirname, '../DataBase/Contacto.json');

const GuardarContacto = (comentariosRef) =>
{
  try
  {
    let datosContacto = require(db_file_path);
    datosContacto.nuevoContacto.push(comentariosRef);
    fs.writeFileSync(db_file_path, JSON.stringify(datosContacto, null, 2));
  }
  catch (error)
  {
    console.log("Error al almacenar contacto", error);
  }
}

const ObtenerTodosLosContactos = () =>
    {
        try
        {
            let infoContacto = require(db_file_path);
            return infoContacto.nuevoContacto;
        }
        catch(error)
        {
            return error;
        }
    
}
module.exports = 
{
  GuardarContacto,  
  ObtenerTodosLosContactos
}
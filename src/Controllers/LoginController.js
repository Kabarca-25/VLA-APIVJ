const userDB = require("../DataBase/LoginDB")


const VerificarUser  = (req, res) =>
    {
        const FUser = req.body;
        const TodosLosUsers = userDB.ObtenerTodosUsers();
        const existeUser = TodosLosUsers.some(tx => tx.User === FUser.User && tx.Password === FUser.Password);
        
        const RespuestaServicio = 
        {
            CodigoRespuesta: -1,
            DetalleRespuesta: "Credenciales Incorrectas"
        }
        if (existeUser)
        {
            RespuestaServicio.CodigoRespuesta = 0;
            RespuestaServicio.DetalleRespuesta = "Sesion Iniciada"
        }
        res.status(200).send({RespuestaServicio})
    }

module.exports = 
{
    VerificarUser 
}
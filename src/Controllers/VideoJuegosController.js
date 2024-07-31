const videoJuegosDB = require("../DataBase/VideoJuegosDB")


const ObtenerTodosLosVideoJuegos  = (req, res) =>
    {        
        const TodosLosVideoJuegos = videoJuegosDB.ObtenerTodosLosVideoJuegos();
                
        const RespuestaServicio = 
        {
            CodigoRespuesta: 0,
            DetalleRespuesta: "Transaccion Exitosa"
            
        }
                
        res.status(200).send({ RespuestaServicio, TodosLosVideoJuegos })
    }

module.exports = 
{
    ObtenerTodosLosVideoJuegos 
}
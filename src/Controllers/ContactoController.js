const contactoDB = require("../DataBase/ContactoDB")

const GuardarContacto = (req, res) =>
{
    const nuevoContacto = req.body;

    const TodosLosContactos = contactoDB.ObtenerTodosLosContactos();
    const existeContacto = TodosLosContactos.some(tx => tx.Nombre === nuevoContacto.Nombre);

    const RespuestaServicio = 
        {
            CodigoRespuesta:-1,
            DetalleRespuesta: "El contacto ya existe"
        }

    if(!existeContacto)
    {
        contactoDB.GuardarContacto(nuevoContacto);       

        RespuestaServicio.CodigoRespuesta = 0;
        RespuestaServicio.DetalleRespuesta = "Contacto ingresado";
    }    
    
    res.status(200).send({RespuestaServicio});
    }
    
const ObtenerTodosLosContactos  = (req, res) =>
    {        
        const TodosLosContactos = contactoDB.ObtenerTodosLosContactos();
                
        const RespuestaServicio = 
        {
            CodigoRespuesta: 0,
            DetalleRespuesta: "Transaccion Exitosa"
            
        }
                
        res.status(200).send({ RespuestaServicio, TodosLosContactos })
    }

module.exports = 
{
  GuardarContacto,
  ObtenerTodosLosContactos
}
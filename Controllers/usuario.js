
const { response } = require('express')



 const GetUsuarios = (req, res = response)=>{







    res.json({

        msg: 'Obteniendo usuario via Get '

    })


}

const GetUsuario = (req, res = response)=>{


        const { id } = req.params




    res.json({

        msg: 'Obteniendo usuario via Get '

    })


}









 const PostUsuario = (req, res = response)=>{

    const { body } = req

    res.json({

        msg: 'Enviando usuario via post',
        body

    })



}



 const PutUsuario = (req, res = response)=>{



    const { id } = req.params;

    const { body } = req


    res.json({

        msg: 'Actualizando suario via Puth',
        id,
        body

    })



}

 const DeleteUsuario = (req, res = response)=>{

    const { id } = req.params;


    res.json({

        msg: 'Eliminando usuario via Delete',
        id

    })



}

module.exports = {


 GetUsuarios,
 GetUsuario,
 PostUsuario,
 PutUsuario,
 DeleteUsuario


}
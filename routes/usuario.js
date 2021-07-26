

 const { Router } = require('express');

const{
     
      GetUsuario,
      GetUsuarios, 
      PostUsuario,
      PutUsuario,
      DeleteUsuario

}  = require('../Controllers/usuario')


const router = Router();




router.get('/', GetUsuario)

router.get('/:id', GetUsuarios)

router.post('/',  PostUsuario)

router.put('/:id', PutUsuario)

router.delete('/:id', DeleteUsuario)


module.exports = router;



const express = require('express')

const cors = require('cors');


class Server{


    constructor(){


            this.app = express();

            this.port = process.env.PORT || '8080';


            this.middlewares();



            this.path = {

                auth : '/api/usuarios',
       



            }

            this.routes();

    }



    middlewares(){


        // Habilitando Cors 

        this.app.use(cors());


        // lectura del body 



        this.app.use(express.json());




        // Carpeta publica 

        this.app.use(express.static('public'));

    }




    routes(){
                

        
        this.app.use(this.path.auth, require('../routes/usuario')); // ruta de autenticacion
     
}








    listen(){

        this.app.listen(this.port , ()=>{


            console.log('Servidor corriendo en puerto' , this.port);



        })


    }


}

module.exports = Server;
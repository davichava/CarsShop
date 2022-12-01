const { request, response } = require('express');
const nodeMailer = require('nodeMailer');


const envioCorreo = (req=request, resp=response) => {
    let body = req.body;

    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        post:587,
        // 50069
        auth:{
            user:'david.chavarria@clinicasandiego.com.co',
            pass:'Daviddani95'
        }
        // auth:{
        //     user:'davicha95@gmail.com',
        //     pass:'nodkdcpivxigbdtg'
        // }
    });


    const opciones = {
        from: 'programacion',
        subject: body.asunto,
        to:body.email,
        text:body.mensaje
    };


    config.sendMail(opciones,function(error,result){

        if (error) return resp.json({ok:false, msg:error});
        return res.json({
            ok:true,
            msg:result 
        });        
    })
}

module.exports = {
    envioCorreo
}
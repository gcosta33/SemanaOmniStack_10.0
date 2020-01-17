const { Router } =  require('express');

const routes = Router();

routes.post('/',(request,response)=>{
    console.log(request.body);
    return response.json({
        mensage: 'Hello 1omni'
    });
});

module.exports = routes;
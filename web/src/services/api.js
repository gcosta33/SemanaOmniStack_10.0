import axios from 'axios'
const devs = []

const api = axios.create({
    baseURL: 'http://192.168.100.24:3113'
})

// export async function devCreate (){
//     try{
//         const response = await api.get('/devs')
//         if(response){
//             console.log(response.data);
//             devs = response
//             return devs
//         }
//     }catch (e) {
//         console.log(e.message);
//     }
// }

export async function devDelete ( devId ){
  
    try{
        const response = await api.delete('/devs',
            {
                data:{
                "_id": devId}
            }
        )
        if(response){
            console.log(response.data);
            
        }
    }catch (e) {
        console.log(e.message);
    }
    
}

export async function devUpdate( data ){
  
    try{
        const response = await api.update('/devs', 
            {
                data:{
                "_id": data}
            }
        )
        if(response){
            console.log(response.data);
            
        }
    }catch (e) {
        console.log(e.message);
    }
    
}


export default api

import React,{ useState, useEffect } from 'react'
import './style.css'
import { devDelete } from '../../services/api'


function ConfirmModal({ message, confirmFunction }){
    const [ active,setActive ] = useState('hide')
    

    useEffect(()=>{
        setVisibility()
    },[message.devName])

    function setVisibility(){
        if(active === 'hide' && message.devName !==undefined && message.devName !==''){
            setActive('show')
        }
       
    }
    return(
        <div className={`confirmModal ${active}`}>
            <p>
                Confirma a {message.action} do usuário <strong>{message.devName}</strong>
                </p>
            <div>
                <button
                    onClick={()=>{
                        setActive('hide')
                        message.devName = ""
                    }}
                >Não</button>
                <button
                     onClick={()=>{
                        setActive('hide')
                        message.devName = ""
                        devDelete(message._id)
                    }}
                >Sim</button>
            </div>
        </div>
    )
}

export default ConfirmModal
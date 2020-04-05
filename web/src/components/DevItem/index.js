import React from 'react'
import { devDelete } from '../../services/api'
import './style.css'


function DevItem ({ dev }){

    return (
        <li className="dev-item">
            <button 
              className='delete'
              onClick={()=>devDelete(dev._id)}
            >X</button>
            <header>
              <img src={dev.avatar_url} alt={dev.name}/>
              <div className="user-info">
              <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
              </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil no Github</a>
          </li>
    )
}

export default DevItem
import React, {useState,useEffect} from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'


function App() {

  const [github_username, setGithub_username] = useState('')
  const [techs, setTechs] = useState('')

  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  async function handleAddDev(e) {
    e.preventDefault()
  }

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude} = position.coords
        setLatitude(latitude)
        setLongitude(longitude)

      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000
      }
    )
  }, [])

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usúario do Github</label>
            <input name="github_username" id="github_username" required value={github_username}
              onChange={ e=> setGithub_username( e.target.value )}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Técnologias</label>
            <input name="techs" id="techs" required value={techs}
            onChange={ e=> setTechs( e.target.value )}
              />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type='number' name="latitude" id="latitude" required value={latitude}
                onChange={ e=> setLatitude( e.target.value )}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type='number' name="longitude" id="longitude" required value={longitude}
                onChange={e=> setLongitude( e.target.value )}
              />
            </div>
          </div>
          <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52605864?s=460&v=4" alt="Guilherme Costa"/>
              <div className="user-info">
                <strong>Guilherme Costa</strong>
                <span>ReactJs, NodeJS, AngularJS</span>
              </div>
            </header>
            <p>Sou um programador apaixonado pelo que faço, estou sempre buscando novos conhecimentos e aprimorando os existentes. Amo o processo de aprendizagem.</p>
            <a href="https://github.com/gcosta33">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52605864?s=460&v=4" alt="Guilherme Costa"/>
              <div className="user-info">
                <strong>Guilherme Costa</strong>
                <span>ReactJs, NodeJS, AngularJS</span>
              </div>
            </header>
            <p>Sou um programador apaixonado pelo que faço, estou sempre buscando novos conhecimentos e aprimorando os existentes. Amo o processo de aprendizagem.</p>
            <a href="https://github.com/gcosta33">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52605864?s=460&v=4" alt="Guilherme Costa"/>
              <div className="user-info">
                <strong>Guilherme Costa</strong>
                <span>ReactJs, NodeJS, AngularJS</span>
              </div>
            </header>
            <p>Sou um programador apaixonado pelo que faço, estou sempre buscando novos conhecimentos e aprimorando os existentes. Amo o processo de aprendizagem.</p>
            <a href="https://github.com/gcosta33">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52605864?s=460&v=4" alt="Guilherme Costa"/>
              <div className="user-info">
                <strong>Guilherme Costa</strong>
                <span>ReactJs, NodeJS, AngularJS</span>
              </div>
            </header>
            <p>Sou um programador apaixonado pelo que faço, estou sempre buscando novos conhecimentos e aprimorando os existentes. Amo o processo de aprendizagem.</p>
            <a href="https://github.com/gcosta33">Acessar Perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;

import React from 'react';

import './global.css'
import './App.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form >
          <div className="input-block">
            <label htmlFor="github_username">Usúario do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Técnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-block">
            <label htmlFor="github_username">Usúario do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>
          
         

        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;

import React, {useState,useEffect} from 'react';
import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import ConfirmModal from './components/ConfirmModal'
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

// import  { devCreate } from './services/api'

function App() {

  const [devs, setDevs] = useState([])
  const [message,setMessage] = useState({})

  // useEffect(()=>{
  //   async function load(){
  //   const dev = await devCreate()
  //   console.log(dev);
  //   setDevs([dev])}
  //   load()
  // },[]
  // )
  

  async function handleAddDev(data) {
   
    const response = await api.post('/devs', data)


    setDevs([...devs, response.data])
  }

  useEffect(() =>{
    async function loadDevs() {
      const response = await api.get('/devs')
      setDevs(response.data)

    }

    loadDevs()

  },[])

 

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <ConfirmModal 
          message={
            message
          }
        ></ConfirmModal>
      <main>
        <ul>
          {devs.map( dev =>(
            <DevItem  setMessage={setMessage}  key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

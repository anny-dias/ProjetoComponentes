import { useState } from 'react'
import {Link} from 'react-router-dom'


function Nav() {
 
  const[userLogado]= useState(JSON.parse(sessionStorage.getItem("usuarioLogado")))

  const handleLogout =()=>{
    sessionStorage.removeItem('usuarioLogado');
    window.location.reload();
  }
  return (
    <>
    <div>
      <div style={userLogado == null ? {display:"none"}: {display:"block"}}>
        <p className='usuario'>{userLogado != null ? `Usuario Logado:${userLogado.usuario}`:""}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </>
  )
}

export default Nav

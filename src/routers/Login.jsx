import {  useState  } from 'react'


function Login() {
 
  const [usuario, setUsuario]= useState({
    usuario:"",
    senha:"",
  })

  const handleChange = async (e)=>{
    const {name, value}=e.target;
    setUsuario({...usuario, [name]:value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    let user;
    try{
      const response = await fetch("http://localhost:5000/usuarios");
      if(response.ok){
        const users = await response.json();
        for (let i=0; i <users.length; i++){
          const use =users[i];
          user =use;
          
          if(use.usuario == usuario.usuario && use.senha == usuario.senha){
            user.use;
            break;
          }

        }
        if(user){
          sessionStorage.setItem('usuarioLogado', JSON.stringify(user));

          setTimeout(()=>{
            window.location='/';
          },3000)
        }else{
          alert("Usuario/senha inválidos")
          setUsuario({
            usuario:'',
            senha:'',
          });
          window.location ="/login";
        }

      }
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="idUsuario"></label>
          <input 
            type="text"
            name='usuario'
            value={usuario.usuario}
            placeholder='Digite seu usuario'
            onChange={handleChange} />

          <label htmlFor="idSenha"></label>
          <input 
            type="password"
            name='senha'
            value={usuario.senha}
            placeholder='Digite sua senha'
            onChange={handleChange} />
        </div>
        <button type='submit'>Logar</button>
      </form>  
    </>
  )
}

export default Login
